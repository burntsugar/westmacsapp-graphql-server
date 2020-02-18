/*
 * @Author: rrr@burntsugar.rocks 
 * @Date: 2020-02-18 09:18:33 
 * @Last Modified by: rrr@burntsugar.rocks
 * @Last Modified time: 2020-02-18 16:58:10
 */

import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLFloat } from 'graphql';

// Point mapped to GraphQLFloat.
export const CoordinateType = new GraphQLObjectType({
  name: 'Coordinate',
  type: 'Query',
  fields: () => ({
    x: {
      type: GraphQLFloat,
      description: 'Latitude coordinate.',
    },
    y: {
      type: GraphQLFloat,
      description: 'Longitude coordinate.',
    }
  })
});

export const LocationType = new GraphQLObjectType({
  name: 'Location',
  type: 'Query',
  fields: () => ({
    id: { type: GraphQLString },
    coords: { type: CoordinateType },
    elevation: { type: GraphQLString }
  })
});

export const PlaceType = new GraphQLObjectType({
  name: 'Place',
  type: 'Query',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'Place record id.',
    },
    location_id: {
      type: GraphQLInt,
      description: 'Location record id.',
    },
    sovereign_name: {
      type: GraphQLString,
      description: 'First nation name.',
    },
    name: {
      type: GraphQLString,
      description: 'Second nation name.',
    }
  })
});

export const CampsiteType = new GraphQLObjectType({
  name: 'Campsite',
  type: 'Query',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'Place record id.',
    },
    location_id: {
      type: GraphQLInt,
      description: 'Location record id.',
    },
    name: {
      type: GraphQLString,
      description: 'Second nation name.',
    }
  })
});

export const CampsiteFacilitiesType = new GraphQLObjectType({
  name: 'CampsiteFacilities',
  type: 'Query',
  fields: () => ({
    csid: {
      type: GraphQLInt,
      description: 'Campsite id.',
    },
    csname: {
      type: GraphQLString,
      description: 'Campsite name.',
    },
    csfactyid: {
      type: GraphQLInt,
      description: 'Campsite facility id.',
    },
    csfactyname: {
      type: GraphQLString,
      description: 'Campsite facility name.',
    },
    csfactydes: {
      type: GraphQLString,
      description: 'Description of facility',
    },
    csfacobs: {
      type: GraphQLString,
      description: 'Observations about the facility',
    }
  })
});