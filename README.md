# apollo-local-query

A local GraphQL networkInterface for [apollo-client](https://github.com/apollostack/apollo-client).

This is useful when you want to server-render a React/Apollo app, and your GraphQL
server is in the same server process. Rather than go out and back through the networking stack
(eg. connecting to localhost), with this module the query runs in the same
process as your rendering code.


## Usage

```js
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

## License

MIT
