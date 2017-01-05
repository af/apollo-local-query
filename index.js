const debug = require('debug')('apollo-local')

/**
* Create a local graphql networkInterface for apollo-client.
*
* See:
* https://github.com/apollostack/apollo-client/issues/962
* https://github.com/apollostack/apollo-client/blob/master/src/transport/networkInterface.ts
*
* @arg {Object} graphql - The graphql-js library. ie, the result of require('graphql')
* @arg {GraphQLSchema} schema - The schema you create for your GraphQL API.
*                               See http://graphql.org/graphql-js/type/#graphqlschema
* @arg {Object} options=
*   @arg {Object} options.rootValue - The optional root value argument for graphqljs
*   @arg {Object} options.context - Optional context for the graphql query
* @return {Promise<GraphQLResult>} - The result of the GraphQL query
*/
const createLocalInterface = (graphql, schema, {rootValue = null, context = null} = {}) => {
    const {execute} = graphql

    return {
        query: ({query, variables, operationName, debugName}) => {
            const start = new Date()
            var result

            try {
                result = execute(schema, query, rootValue, context, variables, operationName)
            } catch (err) {
                return Promise.reject(err);
            }

            return result.then(data => {
                debug(`${operationName} (${(new Date() - start)}ms)`)
                return data
            })
        }
    }
}

module.exports = {createLocalInterface}

