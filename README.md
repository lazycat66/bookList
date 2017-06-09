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

# port
- node listen: 3035
- web listen: 3038(nginx)

# nginx config
server {
    listen       3038;
    server_name  localhost;
    location / {
        index index.html;
        root  /Users/username/folder/bookList/public;
        try_files $uri $uri/ /index.html =404;
        allow all;
    }
    location ~ .*\.(gif|jpg|jpeg|png|ico)$ {
        root  /Users/username/ME/bookList/public/assets/img;
        allow all;
    }
    location ~* \static\ {
        root /Users/username/folder/bookList/public/assets;
        allow all;
    }
}
