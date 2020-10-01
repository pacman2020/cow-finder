import knex from '../database';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

class AccountController{

    async create(request: Request, response: Response){
        const { username, email, password, password2 } = request.body;

        if (password != password2){
            return response.status(200).json({ message: 'different password' });
        }
        
        const exist_user = await knex('users').where('email', email).first();

        if(exist_user){
            return response.status(200).json({ message: 'user already exists in our system' });
        }

        const new_password = bcrypt.hashSync(password, 10);
        
        await knex('users').insert({ username, email, password: new_password });

        return response.status(201).json({message: 'user created successfully'});
    }

}

export default AccountController;
