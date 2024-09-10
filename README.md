# custom-hooks

In React, we can create custom hooks.

Generally, the rule for builtin hooks is as follows:

1. React hooks can only be called inside of component functions, or inside of other hooks
2. React hooks can only be called on the top level. That is, they cannot be called when nested inside of code statements, like conditionals.

## Why build custom hooks instead of just exporting reusable code to a default function?

One of the main reasons to built a custom hook is to allow us to export code that will manipulate some state, or work with other hooks - exporting such functionality to be shared across the component tree.

## Creating custom hooks

Inside of the `src` directory, create a folder named hooks. There, we will define our custom hook function under a folder of the same name.
All custom hooks should start with the word "use", as "use" is a special key word which will be picked up by the linter (any function starting with use is treated as a hook).
