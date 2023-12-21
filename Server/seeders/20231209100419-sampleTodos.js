'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Todos',[
    {
      name:"Buy groceries",
      description: "Buy fruits, vegetables, and snacks for the week.",
      date: "2023-11-18",
      time: "10:31"
    },
    {
      name:"Go to friend's house",
      description: "Get back books from him.",
      date: "2023-11-18",
      time: "10:31"
    },
    {
      name:"Maths Homework",
      description: "Todo the college homework.",
      date: "2023-11-18",
      time: "10:31"
    },
    {
      name: "Complete coding assignment",
      description: "Finish the coding assignment for the web development course.",
      date: "2023-11-20",
      time: "04:00",
      doing: true
    },
    {
      name: "Exercise",
      description: "Go for a 30-minute jog in the park.",
      date: "2023-11-19",
      time: "08:23",
      done: true
    },
    {
      name: "Read a book",
      description: "Read the first three chapters of 'The Great Gatsby.'",
      date: "2023-11-21",
      time: "03:08",
      reviewed: true
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
