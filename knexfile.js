// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'book_list',
            charset: 'utf8'
        },
        pool: {
            min: 2,
            max: 10
        },
    }
};
