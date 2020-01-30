'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      email: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'userRole',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  }
};
