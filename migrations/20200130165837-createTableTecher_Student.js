'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Teacher_Student', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      TeacherId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teacher',
          key: 'TeacherId'
        }
      },
      StudentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Student',
          key: 'StudentId'
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Teacher_Student');
  }
};
