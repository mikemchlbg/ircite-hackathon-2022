const { Sequelize, DataTypes } = require('sequelize')
const EmployeeModel = require('./models/employee.model')

const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'hackathon',
    username: 'root',
    password: '',
    host: 'localhost',
    port: '3306'
})

const Employee = EmployeeModel(sequelize, DataTypes)

if (true) {
    sequelize.sync()
        .then(() => {
            console.log('Database sync completed.')
        })
}

module.exports = {

}