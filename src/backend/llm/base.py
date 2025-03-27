import os
from abc import ABC, abstractmethod
from typing import Optional, Type

import instructor
from dotenv import load_dotenv
from instructor.client import T
from litellm import completion
from litellm.utils import validate_environment
from llama_index.core.base.llms.types import (
    CompletionResponse,
    CompletionResponseAsyncGen,
)
from llama_index.llms.litellm import LiteLLM

# Load dotenv but also set hardcoded credentials
load_dotenv()


class BaseLLM(ABC):
    @abstractmethod
    async def astream(self, prompt: str) -> CompletionResponseAsyncGen:
        pass

    @abstractmethod
    def complete(self, prompt: str) -> CompletionResponse:
        pass

    @abstractmethod
    def structured_complete(self, response_model: Type[T], prompt: str) -> T:
        pass


class EveryLLM(BaseLLM):

    MODEL_API_KEYS = {
        "azure/gpt-4": "CcQ6x1OzCcc4I3uesHDN6eWFzVdO7OqiGbG0zRdU8cidEqEcwmNxJQQJ99BAACHYHv6XJ3w3AAAAACOG70Kh",
        "groq/llama2-70b": "GROQ_API_KEY_FROM_ENV",
        "openai/gpt-4-turbo": "OPENAI_KEY_FROM_ENV"
    }
    
    def __init__(
        self,
        model: str,
        api_key: Optional[str] = None,
        api_base: Optional[str] = None,
        api_version: Optional[str] = None,

    ):
        os.environ.setdefault("OLLAMA_API_BASE", "http://localhost:11434")

        # Store credentials for later use
        self.api_key = api_key or os.environ.get("AZURE_API_KEY")
        self.api_base = api_base or os.environ.get("AZURE_API_BASE")
        self.api_version = api_version or os.environ.get("AZURE_API_VERSION")
        self.model = model

        # For Azure, ensure the model includes the deployment name
        if model.startswith("azure") and "/" not in model:
            deployment_name = os.environ.get("AZURE_DEPLOYMENT_NAME", "")
            if deployment_name:
                self.model = f"azure/{deployment_name}"
            else:
                raise ValueError("Azure deployment name not provided. Set AZURE_DEPLOYMENT_NAME or use 'azure/deployment-name' format.")

        # Set provider-specific environment variables
        provider = self.model.split("/")[0].lower()
        env_mappings = {
            "azure": {
                "api_key": "AZURE_API_KEY",
                "api_base": "AZURE_API_BASE",
                "api_version": "AZURE_API_VERSION",
            },
            "groq": {"api_key": "GROQ_API_KEY"},
            "openai": {"api_key": "OPENAI_API_KEY"},
        }

        if provider in env_mappings:
            mapping = env_mappings[provider]
            if self.api_key and "api_key" in mapping:
                os.environ[mapping["api_key"]] = self.api_key
            if self.api_base and "api_base" in mapping:
                os.environ[mapping["api_base"]] = self.api_base
            if self.api_version and "api_version" in mapping:
                os.environ[mapping["api_version"]] = self.api_version

        # Debug environment variables for Azure
        if provider == "azure":
            print(f"AZURE_API_KEY set: {'AZURE_API_KEY' in os.environ}")
            print(f"AZURE_API_BASE set: {'AZURE_API_BASE' in os.environ}")
            print(f"AZURE_API_VERSION set: {'AZURE_API_VERSION' in os.environ}")
            print(f"Using model: {self.model}")

        # Validate environment (now with potentially set env vars)
        validation = validate_environment(self.model)
        if validation["missing_keys"]:
            raise ValueError(f"Missing keys: {validation['missing_keys']}")

        # Initialize LiteLLM with direct credentials
        self.llm = LiteLLM(
            model=self.model,
            api_key=self.api_key,
            api_base=self.api_base,
            api_version=self.api_version,
        )

        # Configure instructor client
        if "groq" in self.model or "ollama_chat" in self.model:
            self.client = instructor.from_litellm(completion, mode=instructor.Mode.MD_JSON)
        else:
            self.client = instructor.from_litellm(completion)

    async def astream(self, prompt: str) -> CompletionResponseAsyncGen:
        extra_params = {}
        if self.model.startswith("azure/"):
            extra_params.update({
                "api_key": self.api_key,
                "api_base": self.api_base,
                "api_version": self.api_version
            })
        return await self.llm.astream_complete(prompt, **extra_params)

    def complete(self, prompt: str) -> CompletionResponse:
        extra_params = {}
        if self.model.startswith("azure/"):
            extra_params.update({
                "api_key": self.api_key,
                "api_base": self.api_base,
                "api_version": self.api_version
            })
        return self.llm.complete(prompt, **extra_params)

    def structured_complete(self, response_model: Type[T], prompt: str) -> T:
        # Prepare Azure-specific parameters
        extra_params = {}
        if self.model.startswith("azure/"):
            extra_params.update({
                "api_key": self.api_key,
                "api_base": self.api_base,
                "api_version": self.api_version
            })

        return self.client.chat.completions.create(
            model=self.model,
            messages=[{"role": "user", "content": prompt}],
            response_model=response_model,
            **extra_params
        )
