'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('Comentario', {
    id: DataTypes.INTEGER,
    texto: DataTypes.STRING,
    usuarios_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  Comentario.associate = function(models) {
    // associations can be defined here
  };
  return Comentario;
};