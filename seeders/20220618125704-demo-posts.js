'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts', [{
      title: 'Article1',
      text: "text",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Article2',
      text: "text",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Article3',
      text: "text",
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Article4',
      text: "text",
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
