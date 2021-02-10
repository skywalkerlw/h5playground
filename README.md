# Application

The app is setup with [create react app](https://create-react-app.dev/docs/adding-typescript/) scripts, and we ejected for more custom configuration.

## Scripts

### `yarn`

To install project dependencies.

### `yarn start`

To start local server. Navigate to `localhost:3000`  TODO

### `npm run build:dev`

Run the above script to build dev version of H5 app.

### `npm run build: release`

Run the above script to build production version of H5 app.
### `npm run build:new`

todo

## Folder structure

All app source code should be placed in `src` folder.

`src` folder:

- `/api` contains API library code.

- `/app` contains all shared templates and components files.


- `/constants` a generic bucket for constants. We should avoid adding to it and remove this folder later.

- `/middlewares` contains Redux middleware code.

- `/plugins` contains plugins or separate modules that are used in the app.

- `/store` contains Redux store logic.

- `/main.js` file used as an entry point to compile a standalone package.

`build` folder (created after `npm run build`) contains production app code.

`dist` folder (created after `npm run build:package`) contains standalone package code.


## Component design

- Pure functional UI component (No internal state and no callback)
  
```js
```

## Theme and styling

- [css module](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) is recommended. No css-in-js by for now even it's another good approach

- Avoid to use like `style={{backgroundColor: 'black'}} // this will override className`, always prefer to use `className`

## Coding Guide

- Use [React Hooks](https://reactjs.org/docs/hooks-intro.html) over classes. we have included a very popular library called [react hook](https://github.com/streamich/react-use), where you can find a lot of useful functions.

- Use [Redux Style Guide](https://redux.js.org/style-guide/style-guide) for writing store logic.

