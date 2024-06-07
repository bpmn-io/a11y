const path = require('path');


// configures browsers to run test against
// any of [ 'ChromeHeadless', 'Chrome', 'Firefox', 'IE', 'PhantomJS' ]
const browsers = (process.env.TEST_BROWSERS || 'ChromeHeadless').split(',');

// use puppeteer provided Chrome for testing
process.env.CHROME_BIN = require('puppeteer').executablePath();

const absoluteBasePath = path.resolve(__dirname);


module.exports = function(karma) {
  karma.set({

    frameworks: [
      'mocha',
      'sinon-chai',
      'webpack'
    ],

    files: [
      'test.js'
    ],

    preprocessors: {
      'test.js': [ 'webpack' ]
    },

    reporters: [ 'progress' ],

    browsers,

    browserNoActivityTimeout: 30000,

    autoWatch: false,
    singleRun: true,

    webpack: {
      mode: 'development',
      target: 'browserslist:last 2 versions',
      resolve: {
        mainFields: [
          'dev:module',
          'module',
          'main'
        ],
        modules: [
          'node_modules',
          absoluteBasePath
        ]
      },
      devtool: 'eval-source-map'
    }
  });
};
