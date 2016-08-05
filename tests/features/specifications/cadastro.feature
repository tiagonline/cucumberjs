  #language:pt
  
  @cadastro
  Funcionalidade: Cadastro
  
  Contexto: Acessar Cadastro de Usuário
  
  Dado que eu estou na home page
  Quando clico no menu "Register"
  Entao eu vejo a pagina de cadastro de usuários
  
  Esquema do Cenario: Cadastrar novo Usuário
  
  Dado que estou na página "Please sign up"
  E eu preencho o formulário de cadastro de <usuarios> com <iteracao>
      | Nome         | Email            | Senha     | 
      | Tony Stark   | tony@marvel.com  | tony@123  | 
      | Bruce Wayne  | bruce@dc.com     | bruce@123 | 
      | Biff Tannen  | biif@tanner.com  | beef@123  | 
      | Marty Mcfly  | marty@mcfly.com  | marty@123 | 
      | Steve Rogers | steve@marvel.com | cap@123   | 
  Quando clico em Sign up
  Entao sou redirecionado para o Dashboard logado
  E faço logout
  
  Exemplos: 
      | iteracao | 
      | 0        | 
      | 1        | 
      | 2        | 
      | 3        | 
      | 4        | 
      | 5        | 