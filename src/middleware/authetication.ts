import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import secret from '../config/env';

interface TokenPayload{
    id: string;
}

export const auth = async (request: Request, response: Response, next: NextFunction) => {

    const authHeader = String(request.headers.authorization);

    if (!authHeader){
        return response.status(401).json({ message: 'token required!' })
    }
    const toke = authHeader.split(' ')[1];
    
    try {

        const data = await jwt.verify(toke, secret.SECRET_KEY);
        const { id } = data as TokenPayload;

        request.userId = id;

        return next();
        
    } catch (error) {
        return response.status(401).json({ message: 'authentication failure' })
    }
};