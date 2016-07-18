module.exports = function () {


    this.Given(/^i open Github "([^"]*)" profile$/, function (arg1, callback) {
        this.page.po()
            .navigate()
            .waitForElementVisible('@body', 10000)
        callback();
    });

    this.Then(/^the title contains "([^"]*)"$/, function (arg1, callback) {
        
        callback();
    });

    this.Then(/^i click in Repositories tab$/, function (callback) {
        this.page.po().click('@loginButton')
        callback();
    });

    this.Then(/^i fill search field with value "([^"]*)"$/, function (arg1, callback) {
        
        callback();
    });

    this.When(/^i click in search button$/, function (callback) {
        
        callback();
    });

    this.Then(/^i should be redirect to result page$/, function (callback) {
        
        callback();
    });

}