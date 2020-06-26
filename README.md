# FRONT-EISICH
A single page E-commerce application

## Prerequisites

NodeJS >= v12.14.1
Git
Postgres

## Installation

1. Clone this repo `git clone https://github.com/Hest-Tech/front-eisich.git`
2. cd into the project folder and run `yarn install`
3. cd into server folder and run `yarn install`
4. Run migrations `npx sequelize db:migrate`
5. Seed data `npx sequelize db:seed:all`
6. Run server `node server.js`

## Front-end

1. Run steps 1 and 5 for setup and installation
2. Run webpack dev-server `yarn run dev-server`
3. Run tests `yarn test`

## Back-end

1. Run steps 1 and 6 for setup and installation
2. Run tests `yarn test`

## 3rd party APIs

- Firebase
- Daraja API
- Imgur