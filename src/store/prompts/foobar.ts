import { SYSTEM_INTRO } from "./base";

interface FoobarPromptArguments {
    foo: string;
}

export const getFoobarPrompt = (args: FoobarPromptArguments) => `
${SYSTEM_INTRO}

Say something dummy about "${args.foo}".
`
