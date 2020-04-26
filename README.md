# TheFlyingCoder's 2020 React Framework

Ever wanted to break away from create-react-app and use a react boilerplate made by a lone gunslinging code monkey 🔫🐒? Then this is the framework for you. 

Try it out using my npx installer:

`npx 2020-react <project-name>`

[Check it out on npm](https://www.npmjs.com/package/2020-react)

**The Tools** 

Most boilerplates won't push an opinion on code structure, but I would prefer it if you code like a professional, and have standards, so here we are.  

✔️ Typescript - Because I can't trust you to code alone  
✔️ Emotion.js - Imagine if CSS got better? Now here we are.  
✔️ Prettier/Eslint/Stylelint - Don't you dare touch these configs
✔️ Storybook - This will change your life, take the time to learn all it's possibilities
✔️ React Hooks - If you ever use redux or MobX for state management again I will hunt you down

## What to know?
When you first try out this framework have a good look around the tools, there is a lot of potential hidden under the hood ready to be switched on.

**Progressive web app**
If you find yourself needing some offline functionality, simple cacheing, or the ability to install on a phone, PWA's are for you.

To activate the simple PWA settings, just go into webpack.config.ts and flip `const isPWA = false` to true and update the `public/manifest.json` to match your app's details

WARNING: This will turn on service workers, which means cacheing! keep your dev tools open and cache off otherwise you won't any changes.

**Async State provider**
Does your app require data for it's first render? then use the AsyncStateProvider in App.tsx!

This lets you pass an Async function that can do API calls or validate routes/data etc before rendering the rest of your app. In the meantime you can pass App.loader.tsx to render a full page loader.

React will have this functionality locked down soon with Suspense, but for the time being here we are.

**Custom scaffolding**
in `/tools` you'll find scaffolding code which you SHOULD customise.

Out of the box you can run `yarn scaffold <ComponentName>` to automate component creation, keeping consistency and speeding up development.

Update the code template of `scaffoldUtils/Component` to suit your project needs and if you want You can add the same flow for Routes/Api's, whatever you like, just follow the same structure as the component folder.

**VS Code Extensions**
To have the best experience with this framework and the tools in general, you need to have the right setup, so let me share some relevant ones (Alphabetical):

- Bracket Pair Colorizer 2: Unique colours for matching brackets
- Color Highlight: Highlights web colors inline
- ESLint: You know what this does
- Prettier: Same as above
- Stylelint: And again
- Vscode-icons: One of the best icon themes
- Vscode-styled-components: Helps syntax highlting with CSS in JS 



	