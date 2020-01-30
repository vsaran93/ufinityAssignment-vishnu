const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const UserRole = sequelize.define('userRole', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roleName: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.Now()
    }
});

module.exports = UserRole;