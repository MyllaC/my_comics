# my_comics
Projeto Node - Meus quadrinhos

Requisitos:
NodeJS >= 16
ExpressJS
JWT
MongoDB
Gerar Dockerfile
API Marvel - https://developer.marvel.com/

Descrição:

Desenvolver uma API, onde vai poder criar um usuário com usuário e senha. Ele deve ser persistente, e realizar uma rotina de login retornando um token JWT válido durante a sessão.

Implementar um middleware para validar nas rotas de consulta a API, com exceção do registro e login, o token utilizado nas chamadas.

O usuário deve ter nome, email e senha.

A aplicação deve listar os quadrinhos buscando por nome, deve salvar os quadrinhos favoritos do usuário, e possibilitar que seja manipulado (adicionar e remover).

A aplicação deve utilizar variáveis de ambiente para configurar porta, token de API da Marvel, e secret do JWT. Registrar os acessos do usuário, e listar na tela para ele uma relação dos logins.

Mapear os endpoints disponíveis com seus devidos verbos e payloads.

Realizar o front e backend. Pode utilizar a tecnologia que julgar mais fácil para o front.
