import { ChatRequestMessage } from 'llm-api';
import { z } from 'zod';
import { completion, RequestOptions, Response, chat } from 'zod-gpt';
import { models } from './models';

export function getCompletion<T extends z.ZodType = z.ZodString>(prompt: string | (() => string), opt?: Partial<RequestOptions<T>>): Promise<Response<T>> {
    return completion(models.mini, prompt, opt);
}

export function getChatCompletion<T extends z.ZodType = z.ZodString>(messages: ChatRequestMessage[], opt?: Partial<RequestOptions<T>>): Promise<Response<T>> {
    return chat(models.mini, messages, opt);
}

export function getBooleanCompletion(prompt: string | (() => string), opt?: Partial<RequestOptions<z.ZodBoolean>>): Promise<Response<z.ZodBoolean>> {
    return completion(models.mini, prompt, {
        ...opt,
        schema: z.boolean(),
    });
}

export function getNumberCompletion(prompt: string | (() => string), opt?: Partial<RequestOptions<z.ZodNumber>>): Promise<Response<z.ZodNumber>> {
    return completion(models.mini, prompt, {
        ...opt,
        schema: z.number(),
    });
}

export function getChooseCompletion(prompt: string | (() => string), choices: string[], opt?: Partial<RequestOptions<z.ZodString>>): Promise<Response<z.ZodString>> {
    if (!choices.length) {
        throw new Error("Choices array must have at least one element");
    }

    return completion(models.mini, prompt, {
        ...opt,
        schema: z.enum(choices as [string, ...string[]]),
    });
}