
// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
  config: {
    host     : process.env.MYSQL_HOST,
    database : process.env.MYSQL_DATASABE,
    user     : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD
  }
})


// Main handler function
async function handler(event, context) {
//  Run your query
 let results = await mysql.query('SELECT * FROM r4m_rotas')

//  Run clean up function
 await mysql.end()

//  Return the results
 return results
}




// const mysql = require('mysql2/promise');

// var pool = mysql.createPool({
//   host: '162.241.62.177',
//   user: 'pain1521_pecista',
//   password: ['@Pecista2021'],
//   database: 'pain1521_rastreio'
// });

//   try{
//       console.log("Conexão com MySQL realizado com sucesso");
//   }
//   catch{
//       console.log(err)
//   }
