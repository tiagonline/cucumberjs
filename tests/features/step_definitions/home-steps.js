module.exports = function () {

    var page = require('../page-objects/pages.js');

    this.Given(/^que eu estou na home page$/, function (callback) {
        this.url('http://localhost:3000');
        callback();
    });

    this.Given(/^clico no menu "([^"]*)"$/, function (arg1, callback) {
        this.click(page.menu.register);
        callback();
    });

    this.Given(/^eu vejo a pagina de cadastro de usuários$/, function (callback) {
        this
            .waitForElementVisible(page.register.form, 10000)
            .assert.containsText(page.register.form, 'Please sign up');
        callback();
    });

}