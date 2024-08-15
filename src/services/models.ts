import { ModelConfig, OpenAIChatApi, OpenAIConfig } from "llm-api";

const BASE_CONFIG: OpenAIConfig = {
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
};

const defaultConfig: ModelConfig = {
    model: 'gpt-4o-mini',
    maxTokens: 500,
    temperature: 0.1,
};

const memoizedOpenAIChatApis: Record<string, OpenAIChatApi> = {};

export const getOpenAIChatApi = (config: ModelConfig): OpenAIChatApi => {
    const serializedConfig = JSON.stringify(config);
    if (!memoizedOpenAIChatApis[serializedConfig]) {
        memoizedOpenAIChatApis[serializedConfig] = new OpenAIChatApi(BASE_CONFIG, { ...defaultConfig, ...config });
    }
    return memoizedOpenAIChatApis[serializedConfig];
};

export const models = {
    mini: getOpenAIChatApi({ model: 'gpt-4o-mini' }),
}