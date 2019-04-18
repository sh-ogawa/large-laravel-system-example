let webpackConfig = require('../../build/js/webpack.test.conf')

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

    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
