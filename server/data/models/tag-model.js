module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define('tag', {
    name: {
      type: DataTypes.STRING
    }
  });

  tag.associate = (post) => {
    tag.belongsToMany(post, {
      through: 'TagPost',
      as: 'Post'
    });
  };

  return tag;
};

