/// <reference types="vite/client" />

declare module 'process' {
    namespace NodeJS {
        interface ProcessEnv {
            OPENAI_API_KEY: string;
        }
    }
}