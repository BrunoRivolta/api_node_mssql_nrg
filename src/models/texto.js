'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Texto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Texto.init({
    material: DataTypes.STRING,
    descricao_longa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Texto',
	timestamps: false,
	freezeTableName: true
  });
  Texto.removeAttribute("id");
  return Texto;
};
