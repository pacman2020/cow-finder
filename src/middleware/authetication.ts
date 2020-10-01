import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import secret from '../config/env';

export default (request: Request, response: Response, next: NextFunction) => {
    try {
        const authHeader = String(request.headers.authorization);
        const toke = authHeader.split(' ')[1];

        jwt.verify(toke, secret.SECRET_KEY, (err, decode)=>{
            if (err){
                return response.status(401).json({ message: 'invalid token' })
            }
            //Object(decode);

            return next();
        });
        
    } catch (error) {
        return response.status(401).json({ message: 'authentication failure' })
    }
};