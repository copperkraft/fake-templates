const posts = require('./services/posts-service');
const tags = require('./services/tags-service');

setTimeout(() => Promise.all([
  tags.add('angular'),
  tags.add('IDE'),
  tags.add('browser'),
  tags.add('webpack'),
  tags.add('modules'),
  tags.add('security'),
  tags.add('XSS')
])
  .then(() => {
    posts.add({
      'title': 'Angular modules',
      'description': 'Avoiding common confusions with modules in Angular',
      'tags': [
        {
          'id': 1
        },
        {
          'id': 4
        },
        {
          'id': 5
        }
      ]
    });

    posts.add({
      'title': 'StackBlitz ',
      'description': 'Online VS Code IDE for Angular & React',
      'tags': [
        {
          'id': 1
        },
        {
          'id': 2
        },
        {
          'id': 3
        }
      ]
    });

    posts.add({
      'title': 'Angular and XSS Attacks',
      'description': 'Angular, Cross-Site Scripting attack and the Sanitization process',
      'tags': [
        {
          'id': 1
        },
        {
          'id': 3
        },
        {
          'id': 6
        },
        {
          'id': 7
        }
      ]
    });

    posts.add({
      'title': 'observables in Angular',
      'description': 'Observables are lazy collections of multiple values over time',
      'tags': [
        {
          'id': 1
        }
      ]
    });
  }), 1000
);
