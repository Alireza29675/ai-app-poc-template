import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AIState, initialState } from './state';
import { AIActions, createAIActions } from './actions';

export const useAIStore = create<AIState & AIActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      ...createAIActions(set, get),
    }),
    {
      name: 'ai-storage',
    }
  )
);

export const getAIStore = () => useAIStore.getState();
