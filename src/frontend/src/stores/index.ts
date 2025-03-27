import { persist } from "zustand/middleware";
import { create } from "zustand";

import { ConfigStore, createConfigSlice } from "./slices/configSlice";
import { ChatStore, createMessageSlice } from "./slices/messageSlice";
import { ProfileStore, createProfileSlice } from "./slices/profileSlice";
import { createWidgetSlice, WidgetStore } from "./slices/widgetSlice";
import {
  createGrokMessageSlice,
  GroqChatStore,
} from "./slices/grokMessageSlice";

type StoreState = ChatStore &
  ConfigStore &
  ProfileStore &
  WidgetStore &
  GroqChatStore; // Combine all slices

const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createMessageSlice(...a),
      ...createConfigSlice(...a),
      ...createProfileSlice(...a),
      ...createWidgetSlice(...a),
      ...createGrokMessageSlice(...a),
    }),
    {
      name: "store",

      partialize: (state) => ({
        isWidgetVisible: state.isWidgetVisible,
        promptMode: state.promptMode,
        model: state.model,
      }),
    }
  )
);

export const useWidgetStore = () =>
  useStore((state) => ({
    isWidgetVisible: state.isWidgetVisible,
    toggleWidgetVisibility: state.toggleWidgetVisibility,
    activeWidgets: state.activeWidgets,
    setActiveWidgets: state.setActiveWidgets,
    setIsWidgetVisible: state.setIsWidgetVisible,
  }));

export const useChatStore = () =>
  useStore((state) => ({
    messages: state.messages,
    addMessage: state.addMessage,
    setMessages: state.setMessages,
    threadId: state.threadId,
    isGroqMode: state.isGroqMode,
    setThreadId: state.setThreadId,
    updateProSearchCount: state.updateProSearchCount,
    fetchProSearchCount: state.fetchProSearchCount,
    proSearchCount: state.proSearchCount,
    setIsGroqMode: state.setIsGroqMode,
  }));

export const useGroqChatStore = () =>
  useStore((state) => ({
    grokMessages: state.grokMessages,
    setGrokMessages: state.setGrokMessages,
  }));
export const useConfigStore = () =>
  useStore((state) => ({
    model: state.model,
    setModel: state.setModel,
    proMode: state.proMode,
    profileData: state.ProfileData,
    promptMode: state.promptMode,
    setPromptMode: state.setPromptMode,
  }));

export const useProfileState = () =>
  useStore((state) => ({
    profileData: state.ProfileData,
    setProfile: state.loadProfileData,
  }));
