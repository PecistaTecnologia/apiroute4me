
var pool = ({
  host : '162.241.62.177',
  user: 'pain1521_pecista',
  password: ['@Pecista2021'],
  database: 'pain1521_rastreio'
});

  try{
      console.log("Conexão com MySQL realizado com sucesso");
  }
  catch{
      console.log(err)
  }

module.exports = pool;

