'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    estab: DataTypes.STRING,
    "it-codigo": DataTypes.INTEGER,
    "desc-item": DataTypes.STRING,
    "tp-contr-estoque": DataTypes.BOOLEAN,
    "fm-codigo": DataTypes.STRING,
    descricao: DataTypes.STRING,
    "desc-ge": DataTypes.STRING,
    "ge-codigo": DataTypes.INTEGER,
    narrativa: DataTypes.STRING,
    situacao: DataTypes.INTEGER,
    "preco-base": DataTypes.FLOAT,
    "preco-ul-ent": DataTypes.INTEGER,
    "val-unit-mat": DataTypes.FLOAT,
    "preco-medio": DataTypes.FLOAT,
    "ind-processado": DataTypes.INTEGER,
    "ind-alter": DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
	timestamps: false,
	freezeTableName: true
  });
  Item.removeAttribute("id");
  return Item;
};
