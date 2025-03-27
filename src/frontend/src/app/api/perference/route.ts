// app/api/chat/route.ts
import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, newsCaptions } = await req.json();
  const model = groq("llama-3.3-70b-versatile");

  // System prompt to analyze news captions and user prompts for categories
  const systemPrompt = `
    You are an AI assistant tasked with analyzing news titles (captions) and user prompts to derive categories. 
    - If news captions are provided, analyze them and return a list of derived categories (e.g., "tech", "sports", "politics").
    - If a user prompt is provided in the messages, analyze it to identify preferred categories and return them.
    - Return the result as a JSON object with a "categories" field containing an array of category strings.
    - Do not include explanations, just the JSON result.
  `;

  const result = await streamText({
    model,
    system: systemPrompt,
    messages: [
      // If news captions are provided, include them as part of the input
      ...(newsCaptions
        ? [
            {
              role: "user",
              content: `Analyze these news captions: ${JSON.stringify(newsCaptions)}`,
            },
          ]
        : []),
      ...messages, // User prompt from the chat input
    ],
  });

  return result.toDataStreamResponse();
}
