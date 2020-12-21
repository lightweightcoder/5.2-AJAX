const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const itemsList = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      itemsList.push({
        name: faker.commerce.product(),
        createdAt: new Date(),
        updatedAt: new Date(),
        description: faker.commerce.productDescription(),
      });
    }

    try {
      const result = await queryInterface.bulkInsert('Items', itemsList);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
