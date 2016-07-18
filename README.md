## Testes de End2End com Cucumber e Nightwatch.js

### Pré-Requisitos
Conhecimento básico em Node.js, Javascript e Cucumber

### Tecnologias Utilizadas
O projeto utiliza as seguintes tecnologias:

* Javascript
* [Node.js](https://nodejs.org/)

### Sendo que é composto pelas seguintes bibliotecas:

* [Nightwatchjs.js](http://nightwatchjs.org/) - como framework de testes de aceitação.
* [NPM - Node Package Manager](https://www.npmjs.com/) - para gerenciamento dos pacotes necessários para build e funcionamento do app .
* [Selenium](https://www.npmjs.com/package/selenium-standalone) - motor de execução dos testes.
* [Cucumber](https://github.com/cucumber/cucumber-js) - é uma ferramenta para a execução de testes automatizados escritos em linguagem simples "Gherkin"

Obs: todos os pacotes e suas dependências estão mencionados no package.json

### Instalação:

* npm install

### Execução 

#### Headless:
* .\node_modules\.bin\nightwatch.cmd

#### Chrome:
* .\node_modules\.bin\nightwatch.cmd -e chrome

#### Firefox:
* .\node_modules\.bin\nightwatch.cmd -e firefox
