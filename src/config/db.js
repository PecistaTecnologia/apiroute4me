const mysql = require('mysql');


const con = mysql.createConnection({
    host:     '162.241.62.177',
    user:     'pain1521_pecista',
    password: '@Pecista2021',
    database: 'pain1521_rastreio'
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection!')
})


module.exports = con;

