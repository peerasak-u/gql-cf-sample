const { gql } = require('apollo-server-express');

const schema = gql`
  type Query {
    hi: String
  }
`;

module.exports = schema;