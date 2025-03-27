// This file is auto-generated by @hey-api/openapi-ts

export type AgentFinishStream = {
  event_type?: StreamEvent;
};

export type AgentQueryPlanStream = {
  event_type?: StreamEvent;
  steps?: Array<string>;
};

export type AgentReadResultsStream = {
  event_type?: StreamEvent;
  step_number: number;
  results?: Array<SearchResult>;
};

export type AgentSearchFullResponse = {
  steps?: Array<string>;
  steps_details?: Array<AgentSearchStep>;
};

export type AgentSearchFullResponseStream = {
  event_type?: StreamEvent;
  response: AgentSearchFullResponse;
};

export type AgentSearchQueriesStream = {
  event_type?: StreamEvent;
  step_number: number;
  queries?: Array<string>;
};

export type AgentSearchStep = {
  step_number: number;
  step: string;
  queries?: Array<string>;
  results?: Array<SearchResult>;
  status?: AgentSearchStepStatus;
};

export enum AgentSearchStepStatus {
  DONE = "done",
  CURRENT = "current",
  DEFAULT = "default",
}

export type BeginStream = {
  event_type?: StreamEvent;
  query: string;
};

export type ChatHistoryResponse = {
  snapshots?: Array<ChatSnapshot>;
};

export type ChatMessage = {
  content: string;
  role: MessageRole;
  related_queries?: Array<string> | null;
  sources?: Array<SearchResult> | null;
  images?: Array<string> | null;
  is_error_message?: boolean;
  agent_response?: AgentSearchFullResponse | null;
};

export enum ChatModel {
  LLAMA_3_70B = "llama-3-70b",
  GPT_4O = "gpt-4o",
  GPT_4O_MINI = "gpt-4o-mini",
}
export enum PromptMode {
  Web = "web",
  Research = "Research",
  Writing = "writing",
  Grammar = "Grammar",
  Translation = "Translation",
  // Coding = "Coding",
}

export type ChatRequest = {
  thread_id?: number | null;
  query: string;
  history?: Array<Message>;
  model?: ChatModel;
  pro_search?: boolean;
};

export type ChatResponseEvent = {
  event: StreamEvent;
  data:
    | BeginStream
    | SearchResultStream
    | TextChunkStream
    | RelatedQueriesStream
    | StreamEndStream
    | FinalResponseStream
    | ErrorStream
    | AgentQueryPlanStream
    | AgentSearchQueriesStream
    | AgentReadResultsStream
    | AgentFinishStream
    | AgentSearchFullResponseStream;
};

export type ChatSnapshot = {
  id: number;
  title: string;
  date: string;
  preview: string;
  model_name: string;
};

export type ErrorStream = {
  event_type?: StreamEvent;
  detail: string;
};

export type FinalResponseStream = {
  event_type?: StreamEvent;
  message: string;
};

export type HTTPValidationError = {
  detail?: Array<ValidationError>;
};

export type Message = {
  content: string;
  role: MessageRole;
};

export enum MessageRole {
  USER = "user",
  ASSISTANT = "assistant",
}

export type RelatedQueriesStream = {
  event_type?: StreamEvent;
  related_queries?: Array<string>;
};

export type SearchResult = {
  title: string;
  url: string;
  content: string;
};

export type SearchResultStream = {
  event_type?: StreamEvent;
  results?: Array<SearchResult>;
  images?: Array<string>;
};

export type StreamEndStream = {
  event_type?: StreamEvent;
  thread_id?: number | null;
};

export enum StreamEvent {
  BEGIN_STREAM = "begin-stream",
  SEARCH_RESULTS = "search-results",
  TEXT_CHUNK = "text-chunk",
  RELATED_QUERIES = "related-queries",
  STREAM_END = "stream-end",
  FINAL_RESPONSE = "final-response",
  ERROR = "error",
  AGENT_QUERY_PLAN = "agent-query-plan",
  AGENT_SEARCH_QUERIES = "agent-search-queries",
  AGENT_READ_RESULTS = "agent-read-results",
  AGENT_FINISH = "agent-finish",
  AGENT_FULL_RESPONSE = "agent-full-response",
}

export type TextChunkStream = {
  event_type?: StreamEvent;
  text: string;
};

export type ThreadResponse = {
  thread_id: number;
  messages?: Array<ChatMessage>;
};

export type ValidationError = {
  loc: Array<string | number>;
  msg: string;
  type: string;
};
