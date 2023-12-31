const { graphql, buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

let root = {
  hello: () => {
    return 'Hello 3!';
  },
};

let app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4003);
console.log('http://localhost:4003/graphql');
