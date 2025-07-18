const mysql = require('mysql2')
require('dotenv').config()

const config = {
    host: '',
    user: '',
    password: '',
    database: ''
}
const db = mysql.createConnection(config)

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectada la DB')
})

module.exports = db;