module.exports = (sequelize, type) => {
    return sequelize.define('employee', {
        id: {
            type: type.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        }, 
        firstName: {
            type: type.STRING(),
            allowNull: false
        },
        lastName: {
            type: type.STRING(),
            allowNull: false
        },
        position: {
            type: type.STRING(),
            allowNull: false
        },
        sickLeaveCredits: {
            type: type.BIGINT(20),
            allowNull: false
        },
        vacationLeaveCredits: {
            type: type.BIGINT(20),
            allowNull: false
        },
        hourlyRate: {
            type: type.BIGINT(20),
            allowNull: false
        }
    })
}