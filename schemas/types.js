const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLFloat } = graphql;

// Postgis Point type mapped to Float feilds.
var CoordinateType = new GraphQLObjectType({
    name: 'Coordinate',
    fields: () => ({
      x: {
        type: GraphQLFloat,
        description: 'The x.',
      },
      y: {
        type: GraphQLFloat,
        description: 'The y.',
      }
    })
  });

const LocationType = new GraphQLObjectType({
  name: "Location",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    coords: { type: CoordinateType},
    elevation: { type: GraphQLString }
  }
});



exports.LocationType = LocationType;
