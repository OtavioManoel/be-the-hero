const crypto = require('crypto');// vamos usar gerar um id aleatorio 
const connection = require('../database/connection.js');

module.exports ={
    async index(request,response) {
        const ongs = await connection ('ongs').select('*');
     
       return response.json(ongs);
     },

    async create(request,response){
        const { name, email, whatsapp, city, uf} = request.body; // assim eu consigo usar os parametros 

        const id = crypto.randomBytes(4).toString('HEX');// Gera o id
    
        await connection ('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf, 
        })
    
        return response.json({id});
    }
};