# apollo-local-query

[![Build Status](https://travis-ci.org/af/apollo-local-query.svg?branch=master)](https://travis-ci.org/af/apollo-local-query)


A local GraphQL networkInterface for [apollo-client](https://github.com/apollostack/apollo-client) **1.x**. If you're using Apollo Client 2.x and above, please see [this issue](https://github.com/af/apollo-local-query/issues/12)

This is useful for server-rendering a React/Apollo app when your GraphQL server is running in the
same server process. Rather than go out and back through the networking stack
(eg. connecting to localhost), with this module the query runs in the same
process as your rendering code.

## Installation

```
npm install --save apollo-local-query
```

This module uses several ES6 features, so nodejs **v6.0 or above** is required.

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

Note: If you're compiling your server-side code, GraphQL should be imported using the namespace import syntax, as the default import syntax will return `undefined`. For example:

```
import * as graphql from 'graphql';
```

## Logging Queries

This module uses [debug](https://www.npmjs.com/package/debug) to enable optional
logging. To log each query that runs through this local interface (along with its execution time),
launch your server with the `DEBUG` env var set to `apollo-local`. For example, `DEBUG=apollo-local npm start`

## License

MIT
