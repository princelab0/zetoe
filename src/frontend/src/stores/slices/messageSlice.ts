import { create, StateCreator } from "zustand";
import { ChatMessage } from "../../../generated";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

type State = {
  threadId: number | null;
  messages: ChatMessage[];
  proSearchCount: number;
  isGroqMode: boolean;
};

type Actions = {
  addMessage: (message: ChatMessage) => void;
  setThreadId: (threadId: number | null) => void;
  setMessages: (messages: ChatMessage[]) => void;
  updateProSearchCount: (count: number, userId: string) => Promise<void>;
  fetchProSearchCount: (userId: string) => Promise<void>;
  setIsGroqMode: (isGroq: boolean) => void;
};

export type ChatStore = State & Actions;

export const createMessageSlice: StateCreator<ChatStore, [], [], ChatStore> = (
  set
) => {
  const fetchProSearchCount = async (userId: string) => {
    const { data, error } = await supabase
      .from("users")
      .select("pro_search_count")
      .eq("id", userId)
      .single();
    if (error) {
      console.error(error);
      return;
    }
    set({ proSearchCount: data?.pro_search_count || 0 });
  };

  const updateProSearchCount = async (count: number, userId: string) => {
    try {
      // Fetch the current pro_search_count from the database
      const { data, error: fetchError } = await supabase
        .from("users")
        .select("pro_search_count")
        .eq("id", userId)
        .single();

      if (fetchError) {
        console.error(
          "Error fetching proSearchCount from database:",
          fetchError
        );
        return; // Do not proceed if fetching fails
      }

      // Increment the current pro_search_count from the database
      const newProSearchCount = (data?.pro_search_count || 0) + count;

      // Update the pro_search_count in the database
      const { error } = await supabase
        .from("users")
        .update({ pro_search_count: newProSearchCount })
        .eq("id", userId);

      if (error) {
        console.error("Error updating proSearchCount in database:", error);
        return; // Do not update local state if the database update failed
      }

      // Update the local state with the new pro_search_count
      set((state) => ({ proSearchCount: newProSearchCount }));

      // Optionally, fetch the updated count from the database to ensure consistency
      await fetchProSearchCount(userId);
    } catch (error) {
      console.error("Unexpected error in updateProSearchCount:", error);
    }
  };

  return {
    threadId: null,
    messages: [],
    proSearchCount: 0,
    isGroqMode: false,
    addMessage: (message: ChatMessage) =>
      set((state) => ({ messages: [...state.messages, message] })),
    setThreadId: (threadId: number | null) => set({ threadId }),
    setMessages: (messages: ChatMessage[]) => set({ messages }),
    updateProSearchCount,
    fetchProSearchCount,
    setIsGroqMode: (isGroq: boolean) => set({ isGroqMode: isGroq }),
  };
};
