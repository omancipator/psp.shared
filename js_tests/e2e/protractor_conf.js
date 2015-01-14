exports.config = {
  //chromeDriver: '/usr/local/bin/chromedriver',
  //directConnect: true,
  //http://stackoverflow.com/questions/20059943/running-into-error-while-waiting-for-protractor-to-sync-with-the-page-with-basic/22518925#22518925
  rootElement: ".pr-app",
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    seed: "suites/seed/*.js"
  },
  onPrepare: function() {
    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    require('jasmine-reporters');
    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('xmloutput', true, true, false));
  }
};