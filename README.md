> 🚨 This accelerator is constantly improving, feel free to submit bugs and ideas! 🚨

# TheFlyingCoder's 2020 React Accelerator  

If you are building enterprise applications like me, you need full architectural freedom and code transparency to design the custom solutions your client's deserve.

This framework delivers the common tooling and code structures I found myself wanting day to day, so that you have a strong foundation when starting your next project.

Try it out using my npx installer:

`npx 2020-react <project-name>`

[Check it out on npm](https://www.npmjs.com/package/2020-react)

**The Tools**  

It's 2020 and there are a whole wealth of tooling options for React, but these are the staples for every project I work on.  
  
✔️ Typescript - Because I can't trust you to code alone  
✔️ Emotion.js - Imagine if CSS got better? Now here we are.  
✔️ Prettier/Eslint/Stylelint - Don't you dare touch these configs  
✔️ Storybook - This will change your life, take the time to learn all it's possibilities  
✔️ React Hooks - Hello functional components and simple state management  
✔️ Code Scaffolding - Why do the same thing more than once? Make it a node command  

**The UI**  

There is none. Because building a great UI usually happens with your client by your side, (There are exceptions of course)

## What to know?  
When you first try out this framework have a good look around the tools, there is a lot of potential hidden under the hood ready to be switched on.

**Progressive web app**  
If you find yourself needing some offline functionality, simple cacheing, or the ability to install on a phone, PWA's are for you.

To activate the simple PWA settings, just go into webpack.config.ts and flip `const isPWA = false` to true and update the `public/manifest.json` to match your app's details

WARNING: This will turn on service workers, which means cacheing! keep your dev tools open and cache off otherwise you won't any changes.

**Persistent State**  
Ever needed your local state to stick around after a refresh? Now this is easier than ever.

Just add the `persistenceId` key to your App.state.ts, and give it a unique string. This will create a local storage item which is updated every time you alter the global state.

Remember once this is active remember to use your different routes to reset the state back to normal when you need it!

**Async State provider**  
Does your app require data for it's first render? then use the AsyncStateProvider in App.tsx!

This lets you pass an Async function that can do API calls or validate routes/data etc before rendering the rest of your app. In the meantime you can pass App.loader.tsx to render a full page loader.

React will have this functionality locked down soon with Suspense, but for the time being here we are.

**Server Side Rendering**  
Server side rendering doesn't have to be difficult!

In this framework we register all our routes ahead of schedule (with the exception being dynamic routes), so in server.tsx we loop through our routes, pre-render the html
and set it up to be served!

Webpack is used at build time, to compile all the Typescript and application files correctly, to generate a server.js in your dist folder.

You could also follow a similar pattern, and render all the html to static files for each route.

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