const  Sequelize  = require('sequelize');
const sequelize = new Sequelize
('pain1521_rastreio', 'pain1521_pecista', '@Pecista2021', {
      host: '162.241.62.177',
      port: '3306',
      dialect: 'mysql',
      timestamps: false
  });

  try{
      console.log("Conexão com MySQL realizado com sucesso");
  }
  catch{
      console.log(err)
  }



module.exports = sequelize;

