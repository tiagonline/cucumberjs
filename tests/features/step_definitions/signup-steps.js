module.exports = function () {

    var page = require('../page-objects/pages.js');

    this.Given(/^que estou na página "([^"]*)"$/, function (arg1, callback) {
        this
            .waitForElementVisible(page.register.form, 10000)
            .assert.containsText(page.register.form, arg1);
        callback();
    });

    this.Given(/^eu preencho o formulário de cadastro de <usuarios> com (\d+)$/, function (iteration, table, callback) {

        var users = table.hashes();
        this
            .setValue(page.register.name, users[iteration].Nome)
            .setValue(page.register.email, users[iteration].Email)
            .setValue(page.register.password, users[iteration].Senha)
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

    this.Given(/^faço logout$/, function (callback) {
        this
            .click(page.menu.userMenu)
            .pause(1000)
            .click(page.menu.logout)
            .pause(3000);
        callback();
    });

}