/**
* Create a local graphql interface for apollo-client.
*
* See:
* https://github.com/apollostack/apollo-client/issues/962
* https://github.com/apollostack/apollo-client/blob/master/src/transport/networkInterface.ts
*
* @return {Promise<GraphQLResult>} - The result of the GraphQL query
*/
const createLocalInterface = (graphql, schema, {rootValue = null, context = null} = {}) => {
    const {execute} = graphql

    return {
        query: ({query, variables, operationName, debugName}) => {
            return execute(schema, query, rootValue, context, variables, operationName)
        }
    }
}

module.exports = {createLocalInterface}
