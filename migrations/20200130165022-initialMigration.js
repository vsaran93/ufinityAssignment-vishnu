'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Student', {
      StudentId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Email: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    }).then(() => {
      queryInterface.createTable('Teacher', {
        TeacherId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        Email: {
          type: Sequelize.STRING
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Student').then(() => {
      queryInterface.dropTable('Teacher');
    })
  }
};
