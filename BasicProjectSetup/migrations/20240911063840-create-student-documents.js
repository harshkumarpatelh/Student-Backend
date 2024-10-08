'use strict';
/** @type {import('sequelize-cli').Migration} */

// migration for studentDocuments table
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentDocuments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      docType: {
        type: Sequelize.INTEGER
      },
      documentLink: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('studentDocuments');
  }
};