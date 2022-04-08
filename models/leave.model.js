module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
        id: {
            type: type.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        }, 
        markDate: {
            type: type.DATEONLY(),
            allowNull: false
        },
        type: {
            type: type.STRING(),
            allowNull: false
        }
    })
}