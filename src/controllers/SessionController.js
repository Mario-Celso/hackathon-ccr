const connection = require('../database/connection');

module.exports = {
    async login(request, response) {
        const post = request.body;
        let user;

        console.log(post);

        if(post.type == 'caminhoneiro'){
            user = await connection('users')
                .where('cpf', post.cpf)
                .select('name', 'first_access')
                .first();
            
            if (user.first_access == null){
                await connection('users')
                    .where( 'cpf', '=', post.cpf)
                    .update({
                        first_access: true
                })

                user = await connection('users')
                    .where('cpf', post.cpf)
                    .select('name', 'first_access')
                    .first();
            }
        } else {
            user = await connection('users')
                .where('cpf', cpf)
                .select('name')
                .first();
        }
        
        
        if (!user) {
            return response.status(400).json({ error: 'No user found with this cpf.'});
        }


        return response.json(user);
    },

};