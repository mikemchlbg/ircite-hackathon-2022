module.exports = (sequelize, type) => {
    return sequelize.define('employee_attendance', {
        id: {
            type: type.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        }
    })
}