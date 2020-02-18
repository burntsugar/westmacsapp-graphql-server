/*
 * @Author: rrr@burntsugar.rocks 
 * @Date: 2020-02-18 09:18:26 
 * @Last Modified by: rrr@burntsugar.rocks
 * @Last Modified time: 2020-02-18 16:57:30
 */

import { db } from '../pgAdaptor';
import { GraphQLObjectType, GraphQLID, GraphQLList } from 'graphql';
import { LocationType, PlaceType, CampsiteType, CampsiteFacilitiesType } from './types';

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        location: {
            type: LocationType,
            args: { id: { type: GraphQLID } },
            async resolve(parentValue, args) {
                const query = `SELECT * FROM locations WHERE id=$1`;
                const values = [args.id];
                try {
                    const res = await db
                        .one(query, values);
                    return res;
                }
                catch (err) {
                    return err;
                }
            }
        },
        place: {
            type: PlaceType,
            args: { id: { type: GraphQLID } },
            async resolve(parentValue, args) {
                const query = `SELECT * FROM places WHERE id=$1`;
                const values = [args.id];
                try {
                    const res = await db
                        .one(query, values);
                    return res;
                }
                catch (err) {
                    return err;
                }
            }
        },
        campsite: {
            type: CampsiteType,
            args: { id: { type: GraphQLID } },
            async resolve(parentValue, args) {
                const query = `SELECT * FROM campsites WHERE id=$1`;
                const values = [args.id];
                try {
                    const res = await db
                        .one(query, values);
                    return res;
                }
                catch (err) {
                    return err;
                }
            }
        },
        campsite_facilities: {
            type: new GraphQLList(CampsiteFacilitiesType),
            args: { csid: { type: GraphQLID } },
            async resolve(parentValue, args) {
                const query = `SELECT * FROM csdesc1 WHERE csid=$1`;
                const values = [args.csid];
                try {
                    const res = await db
                        .many(query, values);
                    return res;
                }
                catch (err) {
                    return err;
                }
            }
        }
    }
});

export { RootQuery as query };
