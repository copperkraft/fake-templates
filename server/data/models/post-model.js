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
    post.belongsToMany(tag, {
      through: 'TagPost'
    });
  };

  return post;
};

