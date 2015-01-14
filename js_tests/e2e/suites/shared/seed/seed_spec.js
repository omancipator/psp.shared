var SeedPage = require("./seed_page.js");

describe("quick-invest page form", function(){
  var seedPage;

  beforeEach(function(){
    seedPage = new SeedPage();
    seedPage.get();
  });

  it("should say 'seed rendered by angular' somewhere", function(){
    expect(seedPage.greeting.getText()).toMatch(/Prosper Directives/);
  });

  it("should have a select for loan purpose", function(){
    expect(seedPage.loanPurposeInput).toBeDefined();
  });

});

