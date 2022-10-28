var mysql      = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'a',
    database: 'test',
});

connection.connect();
connection.query('select row_number() over () as row_num, uid from test where `rank` > 2', function (error, results) {
    if (error) throw error;
    console.log('The solution is: ', results[0].row_num);
});