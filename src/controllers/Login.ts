import knex from '../database';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import secret from '../config/env';

class LoginController{

    async create(request: Request, response: Response){
        const { email, password } = request.body;

        const user_exists = await knex('users').where('email', email).first();

        if(!user_exists){
            return response.status(200).json({ message: 'user not exists in our system' });
        }

        const verify = await bcrypt.compareSync(password, String(user_exists.password))
            
        if (verify == false){
            return response.status(200).json({ message: 'senha insasvalida' });
        }

        const token = jwt.sign({
            id: user_exists.id
        }, secret.SECRET_KEY ,{expiresIn: "5h"})

        return response.status(200).json({message: token});
    }

}

export default LoginController;