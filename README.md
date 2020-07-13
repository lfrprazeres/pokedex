# Pokedex

## To execute the dev environment properly you need to:

```
1. clone this repository
2. enter in the pokedex directory
3. run yarn or npm install
4. run yarn start or npm start
5. open your favourite browser and acces http://localhost:3000 and get ready to catch your pokemons!
```

> FYI I used Redux Devtools in the project, so if you want to see the redux more easily you can install [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=pt-BR) extension on Chrome, and see accessing F12 > Redux, see how it works in the [github documentation](https://github.com/zalmoxisus/redux-devtools-extension)

to run the test, just type `yarn test` or `npm run test` or simply `jest` to run JEST.

to run storybook, type `yarn storybook` or `npm run storybook` and access http://localhost:63064 to see it!

## I organized the code like:

### Redux folders

    * ./src/actions
        - the actions filenames was built to show the right actions based on it reducers, for example, the file pokedex.js contains all the pokedex's reducer actions.
    * ./src/reducers
        - the reducers filenames was build to show the right reducers based on it store, for example, the file pokedex.js contains all the pokedex's store manipulation.
    * ./src/saga
        - the saga filenames was build to show the right saga based on it actions/reducers, for example, the file pokedex.js contains all the pokedex's watchers.
    * ./src/store
        - the file index.js has all the configuration about saga, redux-api-middleware and redux-devtools-extension.

### routes

    *./src/routes.js
        - Here has all the routes of the application;

### assets (static files)

    * ./src/assets/*

### the app core itself

    * ./src/Screens
        - It has the app screens, rendered in the routes.js file, which has the react-router-dom configuration.
        - The name of the screens is based on the Figma(https://www.figma.com/file/THLxZSlOoUYMZrjFg0Kl1M/Pok%C3%A9dex?node-id=0%3A1) names, to be easier to found the right code to the right screen.
    * ./src/Components
        - It Has the components that screens use.

### util functions

    * ./src/storybook
        - It has all the content about the storybook configuration, filenames based on the rules above.

### about all these files, you can import default exports accessing the right folder, or import it just accessing the main folder, for example:

    - import Home from './src/containers/Home';
    - import { Home } from './src/containers';

### About all the pokemons information, I needed to search a bit in bulbapedia and in other libraries to catch and show the data correctly, about the images, the pokeapi doesn't have this one, so I needed to search on https://pokeres.bastionbot.org/images/pokemon API.

## Techs used:

### Main libraries

- React;
- React Router;

### Storage

- Redux;
- Redux Saga;

### Fetch

- Axios
- Redux API Middleware

### Styling

- Material-ui (core/styles);
- Styled Components;

### Test

- Jest;
- Enzyme;

### Documentation

- Storybook

### Others

- React Simple Infinite Loading
