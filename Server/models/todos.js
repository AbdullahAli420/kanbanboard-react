'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
    }
  }
  Todos.init({
    name: DataTypes.STRING,
    doing: {type:DataTypes.BOOLEAN, defaultValue: false},
    reviewed: {type:DataTypes.BOOLEAN, defaultValue: false},
    done: {type:DataTypes.BOOLEAN, defaultValue: false},
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todos',
    paranoid: true
  });
  return Todos;
};