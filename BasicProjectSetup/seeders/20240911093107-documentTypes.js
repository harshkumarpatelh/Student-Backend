'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const date = new Date();
    await queryInterface.bulkInsert("DocumentTypes", [
      {
        type: 'Addhar Card',
        createdAt: date,
        updatedAt: date
      },
      {
        type: 'Pan Card',
        createdAt: date,
        updatedAt: date
      },
      {
        type: '12th Marksheet',
        createdAt: date,
        updatedAt: date
      },
      {
        type: 'Graduation Marksheet',
        createdAt: date,
        updatedAt: date
      },
      {
        type: 'Electric Bill',
        createdAt: date,
        updatedAt: date
      }
    ], {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("DocumentTypes", null, {
      truncate: true
    });
  }
};
