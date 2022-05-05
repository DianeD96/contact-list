import app from "./server.js";
// import mongodb from "mongodb";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();  // load settings from .env file
const backendPort = process.env.BACKEND_PORT || 8000;  // if backend port not specified in .env file, use 8000

const connection = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
    app.listen(backendPort, () => {
        console.log(`Example app listening on port ${backendPort}`)
    });
});

connection.end();
