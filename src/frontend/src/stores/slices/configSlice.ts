import { env } from "@/env.mjs";
import { StateCreator } from "zustand";
import { ChatModel, PromptMode } from "../../../generated";
import { createClient } from "@/utils/supabase/client";

type State = {
  model: ChatModel;
  proMode: boolean;
  isAuthenticated: boolean;
  promptMode: PromptMode;
};

type Actions = {
  setModel: (model: ChatModel) => void;
  setPromptMode: (promptMode: PromptMode) => void;
};

export type ConfigStore = State & Actions;

const supabase = createClient();

export const createConfigSlice: StateCreator<
  ConfigStore,
  [],
  [],
  ConfigStore
> = (set) => ({
  model: ChatModel.GPT_4O,
  proMode: false,
  setModel: (model: ChatModel) => {
    set({ model });
  },

  isAuthenticated: false,
  promptMode: PromptMode.Web,
  setPromptMode: async (promptMode: PromptMode) => {
    // Determine proMode based on whether the mode is "Research"
    const proModeValue = promptMode === PromptMode.Research;

    // Set the model based on the prompt mode
    let model: ChatModel;
    if (promptMode === PromptMode.Web) {
      model = ChatModel.GPT_4O_MINI; // GPT-4O for Web mode
    } else if (promptMode === PromptMode.Research) {
      model = ChatModel.LLAMA_3_70B; // DeepSeek for Research mode
    } else {
      model = ChatModel.GPT_4O; // NepaliGPT-2O (GPT_4O) for all other modes
    }
    // Optimistically update the UI state
    set({ promptMode, proMode: proModeValue, model });

    try {
      const { data } = await supabase.auth.getUser();
      const userId = data.user?.id;

      if (!userId) {
        console.error("No user ID found");
        // Revert state if no user is authenticated
        set({
          promptMode: PromptMode.Web,
          proMode: false,
          model: ChatModel.GPT_4O,
        });
        return;
      }

      // Update the database asynchronously
      const { error } = await supabase
        .from("users")
        .update({ search_mode: promptMode })
        .eq("id", userId);

      if (error) {
        console.error("Error updating promptMode:", error);
        // Revert state on failure
        set({
          promptMode: PromptMode.Web,
          proMode: false,
          model: ChatModel.GPT_4O,
        });
        throw error;
      }
    } catch (err) {
      console.error("Unexpected error in setPromptMode:", err);
    }
  },
});
