const connection = require('../database/connection');

module.exports = {
    async webhook(request, response) {
        const postParams = request.body;

        console.log(postParams)
    }
};