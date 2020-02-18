/*
 * @Author: rrr@burntsugar.rocks 
 * @Date: 2020-02-18 09:17:12 
 * @Last Modified by: rrr@burntsugar.rocks
 * @Last Modified time: 2020-02-18 16:58:51
 */

import 'dotenv/config';

import pgPromise from 'pg-promise';

const pgp = pgPromise({});

const config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
};

const db = pgp(config);

db.one('select * from locations WHERE id = 1')
    .then(res => {
        console.log('Tezting... ');
        console.log(res);
    });

export { db };
