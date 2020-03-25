const connection = require('../../data/connection');

module.exports = {

    async register (request, response){
        const{id} = request.body;
        const ong = await connection('ongs').select('name').where('id',id).first();

        if(!ong){
            return response.status(400).json({error:'No ONG found with this ID'})
        }
        return response.json(ong);
    }
  }

