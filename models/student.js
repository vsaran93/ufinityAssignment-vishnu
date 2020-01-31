const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

let Student = sequelize.define('Student', {
    StudentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Email: {
        type: DataTypes.STRING
    },
    IsSuspended: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
},{
    freezeTableName: true,
    timestamps: false 
});


module.exports = Student;