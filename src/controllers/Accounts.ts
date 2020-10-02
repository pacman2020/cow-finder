import knex from '../database';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

class AccountController{

    async create(request: Request, response: Response){
        const { username, email, password, password2 } = request.body;

        if (password != password2){
            return response.status(200).json({ message: 'different password' });
        }
        
        let user_exists = await knex('users').where('email', email).first();

        if(user_exists){
            return response.status(200).json({ message: 'user already exists in our system' });
        }

        const new_password = bcrypt.hashSync(password, 10);
        
        await knex('users').insert({ username, email, password: new_password });

        return response.status(201).json({message: 'user created successfully'});
    }

    async delete(request: Request, response: Response){
        const auth = Number(request.userId);

        let user_exists = await knex('users').where('id',auth).first();

        if (!user_exists){
            return response.status(404).json({message: 'user not exists in our system'});
        }

        //deleting this user's cows
        await knex('cows').where('user_id', user_exists.id).delete();
        await knex('users').where('id', user_exists.id).delete();

        return response.status(200).json({message: 'user deleted successfully'});
    }

}

export default AccountController;
