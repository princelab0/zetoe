import os
from enum import Enum

from dotenv import load_dotenv

load_dotenv()


class ChatModel(str, Enum):
    LLAMA_3_70B = "llama-3-70b"
    GPT_4o = "gpt-4o"
    GPT_4o_mini = "gpt-4o-mini"
    COMMAND_R = "command-r"

    # Local models
    LOCAL_LLAMA_3 = "llama3.1"
    LOCAL_GEMMA = "gemma"
    LOCAL_MISTRAL = "mistral"
    LOCAL_PHI3_14B = "phi3:14b"

    # Custom models
    CUSTOM = "custom"


model_mappings: dict[ChatModel, str] = {
    ChatModel.GPT_4o: "openai/gpt-4o",
    ChatModel.GPT_4o_mini: "openai/gpt-4o-mini",

    # Azure model
    ChatModel.LLAMA_3_70B: "openai/o3-mini",

    # Azure DeepSeek-R1
    ChatModel.LOCAL_LLAMA_3: "ollama_chat/llama3.1",

    # google models
    ChatModel.LOCAL_GEMMA: "ollama_chat/gemma",
    ChatModel.LOCAL_MISTRAL: "ollama_chat/mistral",
    ChatModel.LOCAL_PHI3_14B: "ollama_chat/phi3:14b",
}


def get_model_string(model: ChatModel) -> str:
    if model == ChatModel.CUSTOM:
        custom_model = os.environ.get("CUSTOM_MODEL")
        if custom_model is None:
            raise ValueError("CUSTOM_MODEL is not set")
        return custom_model

    openai_mode = os.environ.get("OPENAI_MODE", "openai")
    if openai_mode == "azure" and model in {ChatModel.GPT_4o, ChatModel.GPT_4o_mini}:
        azure_mappings = {
            ChatModel.GPT_4o: "gpt-4o",
            ChatModel.GPT_4o_mini: "gpt-4o-mini"
        }
        return f"azure/{azure_mappings[model]}"

    return model_mappings[model]
