  const crypto = require('crypto');
  const connection = require('../../data/connection');

module.exports = {

async list(request, response){
    const {page = 1} = request.query;
    const [count] = await connection('incidents').count();
    const ongs = await connection('incidents')
        .join('ongs','ongs.id', '=','incidents.ong_id')
        .limit(5)
        .offset((page - 1)*5)
        .select(['incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf']);
    response.header('X-Total-Count', count['count']);
    return response.json(ongs);
},

async register(request, response){
    const {title, description, value} = request.body;
    const ong_id = request.headers.authorization;
    const ret = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id,
    }).returning('*');
    const {id} = ret[0];
   // const id = reg[0];
    return response.json({ id });
},

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents').where('id',id).select('ong_id').first();
        if((incident.ong_id)!== ong_id ){
                return response.status(401).json({ error: 'Operation not authorized.' });
        }
        else{
            await connection('incidents').where('id',id).delete();
            return response.status(204).send();
        }

    }
}

