const { Sequelize, DataTypes } = require('sequelize');
const sequalize = require('../db/connection');
const userRole = require('./userRole');

let User = sequalize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'userRole',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
});

User.hasOne(userRole, {foreignKey: 'roleId'});

module.exports = User;
