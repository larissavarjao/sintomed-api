# Sintomed API

## Como rodar 

Baixe o projeto do github

```git clone git@github.com:larissavarjao/sintomed-api.git```

Mude para o repositório em questão

```cd sintomed-api```

Instale as dependências

```npm install```

Crie um arquivo `.env`, contendo as seguintes variaveis de acordo com a sua configuração:

```
JWT_SECRET=YourSecretHere
POSTGRES_USER=YourUserFromPostgres
POSTGRES_HOST=localhost
POSTGRES_DB=sintomed-develop
POSTGRES_PORT=5432
POSTGRES_PASS=YourPassword
```

Rode os seguintes comandos:
- Para criar um banco de dados para testarmos:
```createdb sintomed-develop```
- Para rodar as migrations no banco de dados:
```npm run migrate```
Para rodar alguns dados inicias no banco de dados:
```npm run seed```

Após isso, só é necessário rodar:
```npm run develop```

Pronto! Sua api de sintomas está rodando :)