# ST IT Cloud - Development Test LV. 3

## 🎯 Objetivo

Você deverá implementar um catalogo interno de produtos, no formato de API, para que os vendedores possam consultar e buscar os produtos que têm permissão paara ver
&nbsp;

## ⛏️ Ferramentas Utilizadas

-   [Express](https://expressjs.com/)
-   [NodeJs](https://nodejs.dev/) com [Typescript](https://www.typescriptlang.org/)
-   [JWT](https://jwt.io/)
-   [YUP](https://github.com/jquense/yup)

### Pré-requisitos

Para a execução do projeto é necessário possuir o [Node.JS](https://nodejs.org/en/download/) (na sua versão 14.x ou superior)

## ⚙ Arquivo de configuração

Aqui você irá criar o arquivo `.env` igual o `.env.example`inserindo os dados conforme é mostrado abaixo:

```bash
PORT=  # porta que a API vai usar
APP_SECRET= # Chave secreta que a aplicação irá usar
```

&nbsp;

## 🚀 Instalação

Para instalar as dependências deve usar o seguinte comando:

```bash
yarn
# ou
npm install
```

&nbsp;

## 🤖 Executar o projeto

Para executar o projeto utilize o comando:

```
yarn dev
```

&nbsp;

## Acesso ao projeto

Após executar o projeto o mesmo poderá ser visualizado através da URL:

`http://localhost:{PORT}/`

<font color="RED">Para executar sem que ocorrá o `PORT` do arquivo `.env` deve estar setado!</font>

## Envio de email

Para acessar a rotas deverá utilizar [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) passando os valores como esta descrito abaixo

## Metódo POST `/Login`

```json
{ "email": "Robson@gmail.com", "password": "asdfasdfasdfasdf" }
```

## Metódo GET `/products/:organization`

```
http://localhost:3333/products/STUFF A02?tags=Tasty
```
