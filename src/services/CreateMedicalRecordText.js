const connection = require('../database/connection');
const crypto = require('crypto');
const { resolveTxt } = require('dns');


module.exports = {
    async createMedicalRecordText( userResponse, user_id) {

    
        const questions = userResponse.form_response.definition.fields;
        const aswers = userResponse.form_response.answers;
    
        //bloco de perguntas
        let numberAndQuestion = Array;
        let Answer = Array;

        let x = 1;

        for(i = 5 ; i < 15; i++) {
            numberAndQuestion[x] = String(x + " " + questions[i].title);
            
            x++
        }

        Answer[5] = String(aswers[5].choice.label);

        Answer[6] = String(aswers[6].choice.label);

        Answer[7] = String(aswers[7].choice.label);

        Answer[8] = String(aswers[8].number);

        Answer[9] = String(aswers[9].text);

        Answer[10] = String(aswers[10].text);
        
        Answer[11] = String(aswers[11].choices.labels);
      
        Answer[12] = String(aswers[12].choices.labels);
        
        Answer[13] = String(aswers[13].choices.labels);
    
        Answer[14] = String(aswers[14].choice.label);
        
        Answer[15] = String(aswers[15].choice.label);
        
        for (i = 5; i < 15; i++){
            const id = crypto.randomBytes(4).toString('HEX');
            let answer = numberAndQuestion[i]
            let question = Answer[i]
            
            try{
                await connection('questions_answers').insert({
                    id, user_id, question, answer
                });  
            } catch(e){
                return false;
            }
           
        }

        return true;
    }
};