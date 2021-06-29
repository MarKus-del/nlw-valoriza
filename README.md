# NLW Valoriza

Este é o projeto que foi criado durante a NLW 6 Together evento oferecido pela [rockeseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg).

## Sobre

Valoriza é uma api para demonstrar sua safistação a outros colaboradores de seu ambiente de trabalho através de elogios.

 A seguir as principais funcionalidades da API:

+ Cadastro de usuarios normais ou admins;
+ Criação de elogios/tag que so poderam ser criados por um admin;
+ atribuir elogios a outros colaboradores;
+ autenticação via JWT;
+ Listagem de elogios recebidos;
+ Listagem de elogios enviados;
+ Listagem de usuarios;

## Tecnologias

+ ExpressJS
+ Typescript
+ TypeORM
+ SQlite
+ JsonWebToken

## Como instalar e rodar no seu computador?

1. baixe e entre no diretorio do projeto pelos seguintes comandos comando:
```bash
  # baixe o projeto pelo github
  git clone https://github.com/MarKus-del/nlw-together-Letmeask

  # entre no diretorio do projeto
  cd nlw-together-Letmeask
```

2. baixe as dependencias do projeto de acordo com seu gerenciador de pacotes:
```bash
  # Usando NPM
  npm install

  # Usando YARN
  yarn install
```

3. crie um arquivo .env no projeto com as seguintes variaveis de ambiente:

```env
# A porta que você deseja que sua aplicação rode
PORT=

# Um hash que validará seus token
SECRET_TOKEN=
```

4. Rode as migrations com o seguinte comando:
```bash
  # Usando NPM
  npm typeorm migration:run

  # Usando YARN
  yarn typeorm migration:run
```

5. inicie o projeto com o seguinte comando:

```bash
  # Usando NPM
  npm dev

  # Usando YARN
  yarn dev
```