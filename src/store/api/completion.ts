import { ChatRequestMessage, ModelConfig, OpenAIChatApi, OpenAIConfig } from 'llm-api';
import { z } from 'zod';
import { completion, RequestOptions, Response, chat } from 'zod-gpt';

const config: OpenAIConfig = {
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
};

const modelConfig: ModelConfig = {
    model: 'gpt-4o-mini',
    maxTokens: 500,
    temperature: 0.1,
};


const openai = new OpenAIChatApi(config, modelConfig);

export function getCompletion<T extends z.ZodType = z.ZodString>(prompt: string | (() => string), opt?: Partial<RequestOptions<T>>): Promise<Response<T>> {
    return completion(openai, prompt, opt);
}

export function getChatCompletion<T extends z.ZodType = z.ZodString>(messages: ChatRequestMessage[], opt?: Partial<RequestOptions<T>>): Promise<Response<T>> {
    return chat(openai, messages, opt);
}