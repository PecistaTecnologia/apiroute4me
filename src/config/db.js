const Sequelize = require('Sequelize');
const sequelize = new Sequelize(
    'pain1521_pecista', 
    '@Pecista2021',
    'pain1521_rastreio',
    {
      dialect:  'mysql',
      host : '162.241.62.177'
    })


module.sequelize = sequelize;
module.exports = sequelize;

