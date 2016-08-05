#language:pt

@cadastro
Funcionalidade: Cadastro
  
Cenario: Acessar Cadastro de Usuário
  
  Dado que eu estou na home page
  Quando clico no menu "Register"
  Entao eu vejo a pagina de cadastro de usuários
  
Cenario: Cadastrar novo Usuário
  
  Dado que estou na página "Please sign up"
  E eu preencho o formulário de cadastro de usuários
  Quando clico em Sign up
  Entao sou redirecionado para o Dashboard logado 