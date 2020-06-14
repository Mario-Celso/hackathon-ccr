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
            numberAndQuestion[x] = toString(x + " " + questions[i].title);
            
            x++
        }

        Answer[5] = toString(aswers[5].choice.label);

        Answer[6] = toString(aswers[6].choice.label);

        Answer[7] = toString(aswers[7].choice.label);

        Answer[8] = toString(aswers[8].number);

        Answer[9] = toString(aswers[9].text);

        Answer[10] = toString(aswers[10].text);
        
        Answer[11] = toString(aswers[11].choices.labels);
      
        Answer[12] = toString(aswers[12].choices.labels);
        
        Answer[13] = toString(aswers[13].choices.labels);
    
        Answer[14] = toString(aswers[14].choice.label);
        
        Answer[15] = toString(aswers[15].choice.label);
        
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