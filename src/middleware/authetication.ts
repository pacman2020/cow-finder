import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import secret from '../config/env';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {

    const token = String(req.headers["auth"]);

    next();
};