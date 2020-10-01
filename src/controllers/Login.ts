import knex from '../database';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import secret from '../config/env';


class LoginController{

    async create(request: Request, response: Response){
        const { email, password } = request.body;

        const exist_user = await knex('users').where('email', email).first();

        if(!exist_user){
            return response.status(200).json({ message: 'user not exists in our system' });
        }

        const verify = await bcrypt.compareSync(password, String(exist_user.password))
            
        console.log('-->',verify);
        if (verify == false){
            return response.status(200).json({ message: 'senha insasvalida' });
        }

        const token = jwt.sign({
            id_user: exist_user.id,
            username: exist_user.username,
            email: exist_user.email
        }, secret.SECRET_KEY ,{expiresIn: "5h"})

        return response.status(200).json({message: token});
    }

}

export default LoginController;