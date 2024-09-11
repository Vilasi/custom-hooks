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

When a custom hook is stateful (when it changes state), its execution will send a reexecution command to the component in which the custom hook is called. So, the custom hooks which manage state for a specific component can be used just as if the state was being managed within the respective component itself.

Just like in custom components, whenever we call our custom hook inside of any component, a new version of the hook is created specifically for that place where it is called. This includes the state that is created inside of the custom hook.

That is, if we export our state updating functions and call them to update the state in one place, that won't affect the state that might be getting declared inside that custom hook when it is called in another place.
