/* const { createPool } = require("mysql");

const pool = createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 5
}); */

var mysql = require('mysql');

var pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "poc"
});

module.exports = pool;