'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Student',
      'isSuspended',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Student',
      'isSuspended'
    )
  }
};
