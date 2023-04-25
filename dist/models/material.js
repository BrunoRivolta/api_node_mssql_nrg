'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Material.init({
    item_id: DataTypes.INTEGER,
    material: DataTypes.STRING,
    descricao: DataTypes.STRING,
    unidade: DataTypes.STRING,
    empresa: DataTypes.STRING,
    centro: DataTypes.STRING,
    deposito: DataTypes.STRING,
    lote: DataTypes.STRING,
    saldo: DataTypes.STRING,
    saldo_projeto: DataTypes.STRING,
    projeto: DataTypes.STRING,
    precomm: DataTypes.STRING,
    precolastpo: DataTypes.STRING,
    setor_atividade: DataTypes.STRING,
    decriacao_sa: DataTypes.STRING,
    grupo_merc: DataTypes.STRING,
    descricao_gm: DataTypes.STRING,
    tuc: DataTypes.STRING,
    descricao_tuc: DataTypes.STRING,
    a1: DataTypes.STRING,
    descricao_a1: DataTypes.STRING,
    a2: DataTypes.STRING,
    descricao_a2: DataTypes.STRING,
    a3: DataTypes.STRING,
    descricao_a3: DataTypes.STRING,
    a4: DataTypes.STRING,
    descricao_a4: DataTypes.STRING,
    a5: DataTypes.STRING,
    descricao_a5: DataTypes.STRING,
    a6: DataTypes.STRING,
    descricao_a6: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Material',
	timestamps: false,
	freezeTableName: true
  });
  Material.removeAttribute("id");
  return Material;
};
