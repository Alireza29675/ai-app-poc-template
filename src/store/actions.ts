import { AIState, initialState } from "./state";
import { getCompletion } from "./api/completion";
import { getFoobarPrompt } from "./prompts/foobar";
import { z } from "zod";

export const createAIActions = (set: (state: Partial<AIState>) => void, get: () => AIState) => ({
  reset: () => {
    set(initialState);
  },

  foobar: async () => {
    const prompt = getFoobarPrompt({ foo: 'bar' });

    const response = await getCompletion(prompt, {
      schema: z.object({
        answer: z.string()
      }),
    });

    set({
      answer: response.data.answer
    })
  }
});

export type AIActions = ReturnType<typeof createAIActions>;