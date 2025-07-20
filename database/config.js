const mysql = require('mysql2')
require('dotenv').config()

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}
const db = mysql.createConnection(config)

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectada la DB')
})

module.exports = db;