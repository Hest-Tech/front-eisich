# FRONT-EISICH
A single page E-commerce application

## Prerequisites

NodeJS >= v12.14.1
Git
Postgres

## Installation

1. Clone this repo `git clone https://github.com/Hest-Tech/front-eisich.git`
2. cd into the project folder and run `yarn install`
3. Create a .env file and copy contents of .env.example
4. cd into server folder and run `yarn install`
5. Create a .env file and copy contents of .env.example
6. Create database `createdb dev_isich -U <db_user>` and `createdb test_isich -U <db_user>`
7. Run migrations `npx sequelize db:migrate`
8. Seed data `npx sequelize db:seed:all`
9. Run server `node server.js`

## Front-end

1. Run steps 1 and 8 for setup and installation
2. Run webpack dev-server `yarn run dev-server`
3. Run tests `yarn test`

## Testing

1. Run steps 1 and 8 for setup and installation
2. Run tests `yarn test`

## 3rd party APIs

- Firebase
- Daraja API
- Imgur