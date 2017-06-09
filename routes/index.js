const account = require('./account');
const book = require('./book');
const user = require('./user');
const evaluate = require('./evaluate');

const init = (app) => {
    app.use('/account', account);
    app.use('/book', book);
    app.use('/user', user);
    app.use('/evaluate', evaluate);
    app.get('/', function(req,res){
        res.send('Hello!');
    });
};
module.exports = {init};
