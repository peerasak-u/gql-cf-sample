const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');
const resolvers = require('./resolvers');

const gqlServer = () => {
    const app = express();

    const apolloServer = new ApolloServer({
        typeDefs: schema,
        resolvers,
        introspection: true,
        playground: true
    });

    apolloServer.applyMiddleware({ app, path: '/', cors: true });

    return app;
}

module.exports = gqlServer