var config = require('../nightwatch.conf.js');

// Example of a test below, use as template or for some guidance
module.exports = {

  'Test Case Name': function(browser) {
    var pageObject = browser.page.myFirstPageObject();
    //replace `pageObject` and `myFirstPageObject` above with real names

    // simple example below using a page object
    pageObject
      .navigate()
      .waitForElementVisible('body')
      .assert.title('Automation Practice - Ultimate QA')

    // or you can run them from browser, as some methods are not available from within the page page Object
    browser
      .pause(5000)
  },

  'Test Case Name 2': function(browser) {
    var pageObject= browser.page.myFirstPageObject();
    var sectionName = myFirstPageObject.section.sectionName;

    // or you can run from a page object section. Note method chaining doesn't work with `expect` assertions
    pageObject.expect.section('@sectionName').to.be.visible;

    sectionName.expect.element('@sectionElementName').text.to.equal('Some text');

    browser.end();
  }
};
