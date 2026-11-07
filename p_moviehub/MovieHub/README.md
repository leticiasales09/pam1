Projeto MovieHub

O MovieHub é uma atividade de uma aplicação mobile desenvolvida para o cadastro e gerenciamento de filmes da escolha do usuário. O sistema permite cadastrar filmes e visualizar as informações cadastradas de forma simples e organizada.

Funcionalidades:
- Cadastro de filmes
- Visualização da lista de filmes cadastrados
- Visualização dos detalhes de um filme
- Navegação entre as telas do aplicativo

O usuário pode inserir as informações:
- Nome do filme
- Nota final
- uma breve descrição do filme
- Data de lançamento do filme

Foram usadas para o desenvolvimento do projeto as tecnologias:
- React Native
- Expo
- Expo Go
- TypeScript
- Git
- GitHub

A conexão do aplicativo MovieHub com o banco de dados foi feita utilizando o MySQL, com o auxílio do XAMPP e do phpMyAdmin.
Para conectar o aplicativo ao banco de dados, foi usada a linguagem php, criando uma API (Interface de Programação de Aplicações). Essa API funciona como uma intermediária entre o aplicativo e o banco de dados.
No aplicativo, desenvolvido com 'React Native e Expo', utilizamos o método `fetch()` para realizar requisições à API. Quando um filme é cadastrado, seus dados são enviados ao PHP, que utiliza comandos SQL para armazená-los na tabela do banco de dados.
Dessa forma, as informações não ficam armazenadas apenas na memória do aplicativo, mas são salvas no banco de dados MySQL, permitindo que continuem disponíveis mesmo após fechar e abrir o aplicativo novamente. 
