const mysql      = require('mysql');
const connection = mysql.createConnection({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'Root@12345',
    database : 'persona'
});

connection.connect();

connection.connect(function (error) {
    if (error) {
        throw error;
    }else {
        console.log('CONEXIÓN EXITOSA');
    }
    
});

connection.end();