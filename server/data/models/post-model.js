module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  post.associate = (tag) => {
    tag.belongsToMany(tag, {
      through: 'TagPost',
      as: 'Tags'
    });
  };

  return post;
};

