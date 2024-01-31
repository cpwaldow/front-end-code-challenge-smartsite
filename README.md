# Front-end Code Challenge Smart Site

A Smart Fit, por atuar no segmento de fitness, passou por várias mudanças na pandemia. Foi necessário desenvolver uma página para buscar unidades fechadas ou abertas para consulta e reserva.

## Pré-requisitos

Certifique-se de ter o seguinte instalado antes de começar:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone git@github.com:cpwaldow/front-end-code-challenge-smartsite.git

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

Exemplo:

```bash
  npm run dev # para abrir a aplicação no navegador local
```

## 🚧 Estrutura do Projeto 🚧

Esta aplicação não faz utilização de rotas e estados globais são compartilhados por meio de [ContextAPI](https://react.dev/learn/passing-data-deeply-with-context).

```shell
  .
  ├── /src
  │    └── /components
  │    │     └── /components
  │    │          ├── /Componente1
  │    │          │    ├── index.tsx
  │    │          │    └── componente1.css
  │    │          └── /Componente2
  │    │               ├── index.tsx
  │    │               └── componente2.css
  │    ├── App.tsx            
  │    └── index.css            
```
