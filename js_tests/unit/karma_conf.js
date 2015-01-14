// Karma configuration
// Generated on Thu Nov 20 2014 08:46:25 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // src
      "vendor/assets/bower_components/angular/angular.js",
      "vendor/assets/bower_components/jquery/dist/jquery.js",
      "vendor/assets/bower_components/foundation/js/*.js",
      "vendor/assets/bower_components/angular-mocks/angular-mocks.js",
      "vendor/assets/bower_components/angular-foundation/src/alert/alert.js",
      // this is a pain...have to load this first for tests to pass...
      "app/assets/javascripts/investor/components/quick_invest/quick_invest.js",
      "app/assets/**/*.js",


      // specs
      "app/assets/**/*_spec.js",

      // templates
      "vendor/assets/bower_components/angular-foundation/template/**/*.html",
      "app/assets/**/*.html"
    ],


    // list of files to exclude
    exclude: [
      "app/assets/javascripts/shared/foundation_setup.js"
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/assets/javascripts/**/*.js': ['jshint'],
      '**/*.html': ['ng-html2js']
    },

    plugins:[
      "karma-jasmine",
      "karma-jshint-preprocessor",
      "karma-phantomjs-launcher",
      "karma-ng-html2js-preprocessor"
    ],

    jshintPreprocessor: {
      //jshintrc: './.jshintrc',
      //stopOnError: true
    },

    ngHtml2JsPreprocessor: {
      //  use this function to normalize template paths for inclusion into tests
      cacheIdFromPath : function(filepath) {
        //prosper template location
        if( filepath.indexOf("app/assets/templates") != -1 ){
          return filepath.substr(filepath.indexOf("app/assets/templates")+21);
        }
        // angular-foundation templates
        else if( filepath.indexOf("bower_components/angular-foundation/") != -1 ){
          return filepath.substr(filepath.indexOf("bower_components/angular-foundation/")+36);
        }
        else{
          //console.log("******BOOYA:  " + filepath);
          return filepath;
        }
      },
      moduleName: "templates"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'public/coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
