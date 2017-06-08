var Promise = require("bluebird");

Promise.all('').then((data) => {
    console.log('success:',data);
}).catch((error) => {
    console.log(error);
});
