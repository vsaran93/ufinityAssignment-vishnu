const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

let Teacher_Student = sequelize.define('Teacher_Student', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  
    },
    TeacherId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Teacher',
            key: 'TeacherId'
        }
    },
    StudentId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Student',
            key: 'StudentId'
        }
    },   
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
},{
    freezeTableName: true,
    timestamps: false 
});

module.exports = Teacher_Student;