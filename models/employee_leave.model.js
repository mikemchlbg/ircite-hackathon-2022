module.exports = (sequelize, type) => {
    return sequelize.define('employee_leave', {
        id: {
            type: type.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        }
    })
}