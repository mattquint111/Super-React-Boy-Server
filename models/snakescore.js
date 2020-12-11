'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SnakeScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SnakeScore.init({
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    difficulty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SnakeScore',
  });
  return SnakeScore;
};