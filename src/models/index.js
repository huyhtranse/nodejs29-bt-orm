const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bt_nodejs_orm', 'root', '1234', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
    console.log('thanh cong')
} catch (error) {
    console.log('fail', err)
}

module.exports = sequelize;