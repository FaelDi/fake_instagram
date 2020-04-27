'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: DataTypes.INTEGER,
    text: DataTypes.STRING,
    img: DataTypes.STRING,
    usuarios_id: DataTypes.INTEGER,
    n_likes: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};