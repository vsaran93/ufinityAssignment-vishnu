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
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
},{
    freezeTableName: true,
    timestamps: false 
});


module.exports = Student;