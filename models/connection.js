const mysql = require("mysql2");

const connect = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "nodeexpress"
});


connect.connect((err)=>
{
    if(err) console.log("Failed to connect to 'nodeexpress' DataBase");
    else console.log("Connection established to 'nodeexpress' DataBase");
});

module.exports = {connect};