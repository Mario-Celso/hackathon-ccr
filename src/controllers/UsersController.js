const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { name, idade, phone, cpf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id, name, idade, phone, cpf
        });

        return response.json({ id });
    },

    async getUser(request, response) {
        const post = request.query;
        let user;

        user = await connection('users')
            .where('cpf', post.cpf)
            .select('*')
            .first();

        if (!user) {
            return response.json({ success: false });
        }

        return response.json({
            ...user,
            success: true 
        });
    },
};