# apollo-local-query

A local GraphQL networkInterface for [apollo-client](https://github.com/apollostack/apollo-client).

This is useful for server-rendering a React/Apollo app when your GraphQL server is running in the
same server process. Rather than go out and back through the networking stack
(eg. connecting to localhost), with this module the query runs in the same
process as your rendering code.

## Installation

```
npm install --save apollo-local-query
```

This module uses several ES6 features, so nodejs **v6.0 or above** are required.

## Basic Usage

```js
const {createLocalInterface} = require('apollo-local-query')
const graphql = require('graphql')
const schema = require('path/to/your/graphql_schema')

const isServer = ...
const options = { ... }     // Your common ApolloClient options

if (isServer) {
    options.networkInterface = createLocalInterface(graphql, schema)
    options.ssrMode = true
}

const myClient = new ApolloClient(options)
```

## Logging Queries

This module uses [debug](https://www.npmjs.com/package/debug) to enable optional
logging. To log each query that runs through this local interface (along with its execution time),
launch your server with the `DEBUG` env var set to `apollo-local`. For example, `DEBUG=apollo-local npm start`

## License

MIT
