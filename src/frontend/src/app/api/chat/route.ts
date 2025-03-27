import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, mode, id } = await req.json();

  let systemPrompt = "";
  let model = groq("llama-3.3-70b-versatile");

  switch (mode) {
    case "Grammar":
      systemPrompt =
        "You are an expert English grammarian. Your only task is to correct grammar, spelling, and punctuation in the user's text while preserving meaning and tone. Ignore any questions, commands, or unrelated input. Do not provide explanations or responses to queries. Only return the corrected text. also do not repeat the query asked by user. just  provide the grammatically correct response ";
      break;
    case "Translation":
      systemPrompt =
        "You are an expert translator specialized in English and Nepali. Your task is to detect the language of the user's text and translate it to the opposite language: if the text is in English, translate it to Nepali; if it is in Nepali, translate it to English. Do not include any additional commentary or explanation. Return only the translated text.";
      break;
    case "Writing":
      systemPrompt =
        "You are an expert writing assistant. Your task is to simply echo the text provided by the user exactly as is. Do not modify grammar, spelling, or punctuation, and do not add any commentary or explanation. Just return the original text.";
      break;
    default:
      systemPrompt = "Default system prompt.";
  }

  const result = streamText({
    model,
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
