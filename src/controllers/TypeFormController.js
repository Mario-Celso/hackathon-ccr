const connection = require('../database/connection');
const crypto = require('crypto');
const Record = require('../services/CreateMedicalRecordText');

module.exports = {
    async webhook(request, response) {
    
            const userResponse = request.body;
            const cpf = toString(userResponse.form_response.answers[3].number);

            user = await connection('users')
                .where('cpf', cpf)
                .select('name', 'first_access')
                .first();

        
            if(!user){
                const id = crypto.randomBytes(4).toString('HEX');
                
                const name = userResponse.form_response.answers[0].text + " " + userResponse.form_response.answers[1].text ;
                const idade = toString( userResponse.form_response.answers[2].date);
                const phone = userResponse.form_response.answers[4].phone_number;
               
                await connection('users').insert({
                    id, name, idade, phone, cpf
                });
            }

        user = await connection('users')
            .where('cpf', cpf)
            .select('name','id')
            .first();
        
        const formResponse = Record.createMedicalRecordText(userResponse, user.id);
        
        if(formResponse){
            return response.json("Questionário salvo com sucesso!");
        } else {
            return response.json("Erro ao salvar questionário!");
        }
    }
};