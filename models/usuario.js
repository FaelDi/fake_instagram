'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    tableName:'usuarios',
    timestamps:false
  });
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};