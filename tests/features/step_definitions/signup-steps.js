module.exports = function () {

    var page = require('../page-objects/pages.js');

    this.Given(/^que estou na página "([^"]*)"$/, function (arg1, callback) {
        this
            .waitForElementVisible(page.register.form, 10000)
            .assert.containsText(page.register.form, arg1);
        callback();
    });

    this.Given(/^eu preencho o formulário de cadastro de usuários$/, function (callback) {
        this
            .setValue(page.register.name, 'Fernando Papini')
            .setValue(page.register.email, 'fernandosqa@outlook.com')
            .setValue(page.register.password, 'teste@12')
        callback();
    });

    this.Given(/^clico em Sign up$/, function (callback) {
        this.click(page.register.submitButton)
        callback();
    });

    this.Given(/^sou redirecionado para o Dashboard logado$/, function (callback) {
        this
            .pause(3000)
            .assert.containsText(page.body, 'dashboard');
        callback();
    });

}