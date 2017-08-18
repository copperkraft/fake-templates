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
    description: 'yes, it is',
    tags: [
      {
        name: 'angular'
      }
    ]
  },
  {
    title: 'StackBlitz ',
    description: ' Online VS Code IDE for Angular & React',
    tags: [
      {
        name: 'react'
      },
      {
        name: 'IDE'
      }
    ]
  },
  {
    title: 'How Angular Protects Us From XSS Attacks',
    description: 'Angular, Cross-Site Scripting attack and the Sanitization process',
    tags: [
      {
        name: 'security'
      },
      {
        name: 'XSS'
      }
    ]
  },
  {
    title: 'NgModule',
    description: 'Avoiding common confusions with modules in Angular',
    tags: [
      {
        name: 'modules'
      }
    ]
  }
].forEach(data => {
  return post.create(
    data,
    {
      include: [tag]
    });
}), 2000);

