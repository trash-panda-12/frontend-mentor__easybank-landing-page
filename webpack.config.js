const path = require('path');

module.exports = {
  entry: './js/application.js',
  output: {
    filename: 'packed.js',
    path: path.resolve(__dirname, './js'),
  },
  watch: true
};

