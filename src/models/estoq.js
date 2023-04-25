"use strict"
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Estoq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estoq.init(
    {
      "cod-estabel": DataTypes.STRING,
      "it-codigo": DataTypes.STRING,
      "cod-depos": DataTypes.STRING,
      "cod-localiz": DataTypes.STRING,
      "cod-refer": DataTypes.STRING,
      lote: DataTypes.STRING,
      "quantidade-atu": DataTypes.FLOAT,
      "ind-processado": DataTypes.INTEGER,
      "ind-alter": DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Estoq",
      timestamps: false,
	  freezeTableName: true
    }
  );
  Estoq.removeAttribute("id");
  return Estoq;
};
