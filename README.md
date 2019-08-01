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

### `yarn release --no-ci`

[Creates](https://github.com/semantic-release/semantic-release) a new app [release](https://github.com/iki/expenses-app-react-ts-gql/releases):

- [Analyzes commits](https://github.com/semantic-release/commit-analyzer) since the last version tag and [determines](https://github.com/semantic-release/semantic-release#commit-message-format) the next [semantic version](https://semver.org/)
- [Generates](https://github.com/semantic-release/changelog) a [changelog](https://github.com/iki/expenses-app-react-ts-gql/blob/master/CHANGELOG.md)
- [Pushes](https://github.com/semantic-release/git) the release commit and [new release](https://github.com/iki/expenses-app-react-ts-gql/releases) version tag to [`master`](https://github.com/iki/expenses-app-react-ts-gql/tree/master)
- [Comments](https://github.com/semantic-release/github) on released [Pull Requests](https://github.com/iki/expenses-app-react-ts-gql/pulls) and [Issues](https://github.com/iki/expenses-app-react-ts-gql/issues)

[Deployment](#yarn-deploy) to [GitHub Pages](https://pages.github.com/) using [`gh-pages`](https://github.com/iki/expenses-app-react-ts-gql/tree/gh-pages) branch is handled [separately](#yarn-deploy) for flexibility and due to [gh-pages-plugin](https://github.com/qiwi/semantic-release-gh-pages-plugin)/[git-plugin](https://github.com/semantic-release/git) [issue](https://github.com/qiwi/semantic-release-gh-pages-plugin/issues/48).

[**Requires**](https://github.com/qiwi/semantic-release-gh-pages-plugin#configuration) setting [`GH_TOKEN`](https://github.com/settings/tokens) or [`GITHUB_TOKEN`](https://github.com/settings/tokens) with [`public_repo` scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) in your environment, or in a [local `.env` file](#used-environment-files).

### `yarn deploy`

[Deploys](https://github.com/tschaub/gh-pages) build to [GitHub Pages](https://pages.github.com/) using [`gh-pages`](https://github.com/iki/expenses-app-react-ts-gql/tree/gh-pages) branch.

## Code Style

Install [Prettier](https://github.com/prettier/prettier#editor-integration) and
[TSLint](https://palantir.github.io/tslint/usage/third-party-tools/) support for your editor/IDE.

## Roadmap

### Codebase

- [x] Define code style
- [ ] Add component storybook

### Data

- [ ] Create GraphQL schema
- [ ] Add sample data loaders

### Docs

- [x] Design decisions
- [x] Roadmap
- [ ] Contributing

### Core

- [x] Create React app with TypeScript support
- [ ] Setup Apollo GraphQL
- [ ] Setup Material UI
- [ ] Setup routing
- [ ] Setup authentication

### Features

#### Users

- [ ] Login and logout

#### Expenses

- [ ] View expenses
- [ ] Edit expenses
- [ ] Add expenses
- [ ] Edit categories
- [ ] Add categories
- [ ] Filter expenses
- [ ] View expenses timeline chart
- [ ] View expenses chart by category
- [ ] View expenses using infinite loader

#### Shared expenses

- [ ] Share expenses with other users
- [ ] View mutual debt chart by user
- [ ] Balance mutual debt

### Performance

- [ ] Test load speed
- [ ] Analyze bundle size
- [ ] Load offline using service worker
- [ ] Work offline using GraphQL cache

### Testing

- [ ] Test components
- [ ] Test code style
- [ ] Test code quality
- [ ] Test code for security vulnerabilities
- [x] Test dependencies for security vulnerabilities
- [ ] Test responsive design
- [ ] Test GraphQL queries and mutations with backend

### DevOps

- [x] Add release process
- [x] Add deployment process
- [ ] Run tests and deployment in CI/CD pipeline
- [ ] Log errors to issue tracker
- [ ] Extend logged errors with session replay data

## Settings

We use
[the same dotenv files](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#adding-development-environment-variables-in-env)
as [Create React App](https://github.com/facebookincubator/create-react-app).

To define permanent environment variables, create a file called `.env` in the root of your project:

> REACT_APP_NOT_SECRET_CODE=abcdef

The `.env` files should be checked into source control, with the exclusion of `.env*.local`.

### Used environment files

- `.env`: Default.
- `.env.local`: Local overrides. This file is loaded for all environments except test.
- `.env.development`, `.env.test`, `.env.production`: Environment-specific
  settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of
  environment-specific settings.

The environment is determined by `NODE_ENV` variable. The basic Yarn commands use different environments by default.
Files on the left have more priority than files on the right:

- `yarn start`: Defaults to `development` environment and loading `.env.development.local`, `.env.development`,
  `.env.local`, `.env`.
- `yarn build`: Defaults to `production` environment and loading `.env.production.local`, `.env.production`,
  `.env.local`, `.env`.
- `yarn test`: Defaults to `test` environment and loading `.env.test.local`, `.env.test`.

These variables will act as the defaults if the machine does not explicitly set them. Please refer to the
[dotenv documentation](https://github.com/motdotla/dotenv) for more details.
