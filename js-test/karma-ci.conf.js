let webpackConfig = require('../build/js/webpack.test.conf')

module.exports = function (config) {
  config.set({
    browsers: ['jsdom'],
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      './index.js'
    ],

    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['coverage'],

    coverageReporter: {
      type: 'lcov',
      dir: './reports',
      subdir: './'
    }
  })
}
