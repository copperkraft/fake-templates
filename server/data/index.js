const Sequelize = require('sequelize');
const databaseConnection = require('./db-connetction');

const post = require('./models/post-model')(databaseConnection, Sequelize.DataTypes);
const tag = require('./models/tag-model')(databaseConnection, Sequelize.DataTypes);

post.associate(tag);
tag.associate(post);

module.exports.post = post;
module.exports.tag = tag;

setTimeout(() => [
  {
    title: 'Angular is perfect',
    description: 'yes, it is'
  },
  {
    title: 'StackBlitz ',
    description: ' Online VS Code IDE for Angular & React'
  },
  {
    title: 'How Angular Protects Us From XSS Attacks',
    description: 'Angular, Cross-Site Scripting attack and the Sanitization process'
  },
  {
    title: 'NgModule',
    description: 'Avoiding common confusions with modules in Angular'
  }
].forEach(data => post.create(data)), 1000);
setTimeout(() => [
  {
    name: 'Angular'
  },
  {
    name: 'IDE '
  },
  {
    name: 'Security'
  },
  {
    name: 'Modules'
  }
].forEach(data => tag.create(data)), 1000);
