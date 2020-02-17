# ⛺️ westmacsapp-graphql-server

express + express-graphql + postgres + postgis

![Looking across Alice Valley. ASP, NT, AU](ban.jpg)

In progress...I will make this look more adult shortly...

## ⛺️ Hot finds...

Map postgis Point:

````JavaScript
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
````

<br>

<hr>

*rrr@<span></span>burntsugar.rocks*