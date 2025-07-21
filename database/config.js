const mysql = require('mysql2')
require('dotenv').config()
console.log(process.env.HOST)

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_DATABASE || '',
    port:process.env.DB_PORT
}
const db = mysql.createConnection(config)

db.connect((err) => {
    if (err) {
console.log('Error de conexion',err.message);
return;
    }
    console.log('Conectada la DB')
})

module.exports = db;