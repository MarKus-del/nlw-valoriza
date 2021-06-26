import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) return res.status(401).end();

  const [, token] = bearerToken.split(' ');

  try {
    const { sub } = verify(token, process.env.SECRET_TOKEN) as IPayload;
    req.user_id = sub;
    return next();
  } catch (error) {
    return res.status(401).end();
  }

};