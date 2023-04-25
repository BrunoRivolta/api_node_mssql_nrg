'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Retorno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Retorno.init({
    id_lote: DataTypes.STRING,
    cod_ret: DataTypes.STRING,
    mensagem: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Retorno',
	timestamps: false,
	freezeTableName: true
  });
  Retorno.removeAttribute("id");
  return Retorno;
};
