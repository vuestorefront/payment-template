const { resolve } = require('path');

module.exports = function Payment<%= PAYMENT_CAPITALIZED_TAG %>Provider(moduleOptions) {
  const { <%= PAYMENT_TAG %> } = this.options;
  const options = {
    ...<%= PAYMENT_TAG %>,
    ...moduleOptions
  };
    
  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    options
  })
};

module.exports.meta = require('../package.json');