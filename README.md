# Sample expenses app using [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) and [GraphQL](https://graphql.org/)

## Design decisions

- **Model:** [Apollo GraphQL](https://www.apollographql.com/) for data with demo [Graphcool BaaS](https://www.graph.cool/), and React [State](https://reactjs.org/docs/hooks-state.html)/[Context](https://reactjs.org/docs/hooks-reference.html#usecontext) hooks for state
- **View:** [React](https://reactjs.org/)
- **Controller:** [React function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
- **Dev Stack:** [Create React App](https://facebook.github.io/create-react-app/) with [TypeScript support](https://facebook.github.io/create-react-app/docs/adding-typescript)
- **Design:** [Material-UI](https://material-ui.com/) components with [built-in CSS-in-JS styling](https://material-ui.com/styles/basics/)
- **Package Manager:** [Yarn](https://yarnpkg.com/) for [speed](https://github.com/pnpm/benchmarks-of-javascript-package-managers), without [PnP](https://yarnpkg.com/en/docs/pnp) (needs [workarounds](https://yarnpkg.github.io/berry/advanced/pnpify), [not mature yet](https://github.com/facebook/create-react-app/issues/5647))
- **Code Style:** [Prettier](https://prettier.io/) with [120 chars/line, no semicolons, and single quotes (except JSX)](https://github.com/iki/expenses-app-react-ts-gql/blob/master/.prettierrc.yml)

## Getting started

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## Code Style

Install [Prettier](https://github.com/prettier/prettier#editor-integration) and
[TSLint](https://palantir.github.io/tslint/usage/third-party-tools/) support for your editor/IDE.
