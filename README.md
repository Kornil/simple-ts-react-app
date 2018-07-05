# simple-ts-react-app

[![Greenkeeper badge](https://badges.greenkeeper.io/Kornil/simple-ts-react-app.svg)](https://greenkeeper.io/)

React starter project written in typescript, includes redux, webpack, babel, sass, jest & enzyme.


## Project structure

The boilerplate structure and files are the same as this repo minus the *bin* folder, everything else is exactly the same.

```
*root*
|
├── */src/*
│   ├── */assets/* where images and stuff are stored
│   ├── */containers/* react-router jsx pages
│   ├── *App.tsx* main layout
│   ├── *Routes.tsx* front-end routes
│   ├── *index.tsx* javascript entry point
│   ├── */custom-types/* contains custom types
│   │   └── *index.d.ts* only "*.png" for now (to make images import work)
│   ├── *style.scss* styling
│   └── */tests/* contains test environment (Jest + Enzyme)
│       ├── */__mock__/* contains setup to provide a valid path for imports
│       ├── */_tests__/* the actual tests
│       └── *setup.ts* setup for enzyme for react 16
├── *package.json* the whole package.json with every dependency and script, nothing is kept hidden
├── *tslint.json* tslint config
├── *tsconfig.json* typescript config
├── *.babelrc* babel config (polyfills)
├── *webpack.config.js* webpack config, it has a dev and prod environment
├── *index.html* entry point
└── *README.md* this file
```


## Tests

The testing environment is written in Jest and Enzyme.
The included tests are very basic and only check the proper render of base components + routes, there are no snapshot tests, I did not feel they were needed being the components really basic, at the first change they would need to be updated, imho setting the wrong approach of _"hey tests are broken, let's regenerate snapshots again"_.
While still basic, the default tests are easy to manage and expand, providing a smoother curve into testing with JavaScript and React.


## Tslint

This project uses Typescript recommended specs plus Typescript react specs so you can write error-free react and typescript code, if you use Visual Studio Code, you can install tslint from the extension tab to activate this function, other editors just google _name of the editor + tslint_ you will find how to enable it for your editor.

## How to contribute

I wrote a [small guide](https://medium.com/@francesco.agnoletto/how-to-not-f-up-your-local-files-with-git-part-1-e0756c88fd3c) on how to contribute and the common etiquette to follow.

