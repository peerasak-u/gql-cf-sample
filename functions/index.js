const { https } = require('firebase-functions');
const gqlServer = require('./graphql/server');

const server = gqlServer();

const api = https.onRequest(server);

module.exports = {
    api
}