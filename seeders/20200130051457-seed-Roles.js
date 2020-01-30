'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('userRole', [{ roleName: 'Teacher' }, { roleName: 'Student' }])
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('userRole', null, {})
  }
}
