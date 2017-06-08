## This Project about book list

## Build
* install mysql
* install redis

# install
- npm install -g knex
- npm install -g pm2

# development model
knex migrate:latest
node init.js
pm2 start run.config.js --only dev
