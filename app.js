/*
 * @Author: rrr@burntsugar.rocks 
 * @Date: 2020-02-18 09:18:46 
 * @Last Modified by: rrr@burntsugar.rocks
 * @Last Modified time: 2020-02-18 16:58:34
 */

import express from 'express';
import expressGraphQl from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { query } from './schemas/query.js';
//const { mutation } = require("./schemas/mutation");

const schema = new GraphQLSchema({
  query,
  //mutation
});

var app = express();

// Go straight to graphiql and stay there!
app.use(
  '/',
  expressGraphQl({
    schema: schema,
    graphiql: true
  })
);

app.listen(3000, () =>
  console.log('GraphQL server running on localhost:3000 WOOT')
);

export { app };