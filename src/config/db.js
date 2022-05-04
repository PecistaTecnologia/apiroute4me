const Sequelize = require('Sequelize');
const sequelize = new Sequelize(
    'pain1521_rastreio',  
    'pain1521_pecista', 
    '@Pecista2021',
    
    {
      dialect:  'mysql',
      host : '162.241.62.177'
    })



module.exports = sequelize;

