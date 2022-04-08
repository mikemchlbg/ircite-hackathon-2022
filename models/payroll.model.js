module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
        id: {
            type: type.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        }, 
        startDate: {
            type: type.DATEONLY(),
            allowNull: false
        },
        endDate: {
            type: type.STRING(),
            allowNull: false
        },
        salary: {
            type: type.BIGINT(20),
            allowNull: false
        }
    })
}