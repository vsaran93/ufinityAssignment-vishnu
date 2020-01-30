module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('userRole', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            roleName: {
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW()
            }
        })

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('userRole')
    }
}