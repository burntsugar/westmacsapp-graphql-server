const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { LocationType } = require("./types");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        location: {
            type: LocationType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM locations WHERE id=$1`;
                const values = [args.id];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        }
    }
});

exports.query = RootQuery;