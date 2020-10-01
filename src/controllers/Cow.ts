import knex from '../database';
import { Request, Response } from 'express';

class CowController{
    async index(request: Request, response: Response){

        const cows = await knex('cows').select();

        return response.status(200).json(cows);
    }

    async show(request: Request, response: Response){
        const { id } = request.params;

        const cow = await knex('cows').where('id', id).first();

        return response.status(200).json(cow);
    }

    async create(request: Request, response: Response){
        const { city, uf, address,  whatsapp, email, user_id } = request.body;

        await knex('cows').insert({
            image: 'fake-image' , city, uf, address, email, whatsapp, user_id
        });

        return response.status(201).json(request.body);
    }
}

export default CowController;
