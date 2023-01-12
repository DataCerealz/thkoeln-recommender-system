# thkoeln-recommender-system

A svelte implementation of the University of Applied Sciences Cologne recommender system for project III.

```npm run dev```

The important part of the folder structure is as followed

```
.
+-- public
|   +--
+-- src
|   +-- App.svelte
|   +-- main.ts
|   +-- routes
        +-- route.svelte
    +-- components
        +-- component.svelte
    +-- data

```

- New routes (pages) have to be added in the routes folder
- New components have to be added in the componentens folder
- JSON data has to be added in the data folder

The business logic should be added in the parent component in App.svelte and the 
needed data for the components should be passed as props.

Links to the framework and the most important technology used:
- https://svelte.dev/docs
- https://svelte.dev/tutorial/basics
- https://svelte.dev/tutorial/declaring-props --> passing props

## Added dependecies

### @rollup/plugin-json

- Installation: npm install @rollup/plugin-json --save-dev
- Tutorial for installation: https://www.youtube.com/watch?v=7CgBGwViuyM