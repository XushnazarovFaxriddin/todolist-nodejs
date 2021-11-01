const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'todolist',
    password: "15550107",
    waitForConnections: true,
    connectionLimit: 1000,
    queueLimit: 0
});

pool.query("SELECT * FROM todolist;", (err, rows, fields) => {
    if (err) {
        return console.error("Connection error")
    }

    console.log("Database connected...")
})

module.exports = pool