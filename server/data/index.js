const Sequelize = require('sequelize');
const databaseConnection = require('./db-connetction');

const post = require('./models/post-model')(databaseConnection, Sequelize.DataTypes);
const tag = require('./models/tag-model')(databaseConnection, Sequelize.DataTypes);

post.associate(tag);
tag.associate(post);

module.exports.post = post;
module.exports.tag = tag;
