# Front-end Code Challenge Smart Site

A Smart Fit, por atuar no segmento de fitness, passou por várias mudanças na pandemia. Foi necessário desenvolver uma página para buscar unidades fechadas ou abertas para consulta e reserva.

## Pré-requisitos

Certifique-se de ter o seguinte instalado antes de começar:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação

**Clone o repositório:**

   ```bash
    git clone git@github.com:cpwaldow/front-end-code-challenge-smartsite.git
   ```

## Navegue até o diretório do projeto

 ```bash
   cd front-end-code-challenge-smartsite
  ```

## Instale as dependências

 ```bash
   npm install
  ```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

- dev: Inicia a aplicação no modo de desenvolvimento.
- build: Compila o projeto para produção.
- test: Executa os testes.
- deploy: Executa o deploy em produção.

Exemplo:

```bash
  npm run dev # para abrir a aplicação no navegador local
```

## Deploy

Este projeto está hospedado na [Vercel](https://vercel.com/) via CLI, ao executar o comando `npm run deploy` é feito o build do projeto e inicializa a disponibilização da nova versão em produção

## 🚧 Estrutura do Projeto 🚧

Esta aplicação não faz utilização de rotas. Estados globais são compartilhados por meio de [ContextAPI](https://react.dev/learn/passing-data-deeply-with-context).

```shell
  .
  ├── /src
  │    └── /components
  │    │     └── /components
  │    │          ├── /assets
  │    │          ├── /utils
  │    │          └── /Componente1
  │    │          │    ├── index.tsx
  │    │          │    └── componente1.css
  │    │          └── /Componente2
  │    │               ├── index.tsx
  │    │               └── componente2.css
  │    ├── /services
  │    ├── /context
  │    ├── /tests
  │    └── App.tsx            
  │    └── index.css            
```
