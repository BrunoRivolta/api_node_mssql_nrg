'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Post', {
      _id: {
        type: Sequelize.STRING,
		allowNull: true,
		primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
		allowNull: false
      },
      description: {
        type: Sequelize.STRING,
		allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Post');
  }
};
