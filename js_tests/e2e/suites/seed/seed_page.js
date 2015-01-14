var SeedPage = function(){
  this.greeting = $("h1");
  this.loanPurposeInput = $("#lcatid");

  this.get = function(){
    browser.get("http://0.0.0.0:3000/test");
    browser.waitForAngular();
  }
};

module.exports = SeedPage;