const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    conectionlimit: 10,
    host: 'localhost',
    user: 'root',
    pasword: '',
    database: 'taller'
});

pool.query = util.promisify(pool.query);

module.exports = pool;