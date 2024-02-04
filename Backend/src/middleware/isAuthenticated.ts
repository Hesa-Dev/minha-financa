import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction) {
    //    console.log("middleware ...")

    //    receber  o token 
    const autherToken = req.headers.authorization

    if (!autherToken) {
        return res.status(401).end();
    }

    const [, token] = autherToken.split(" ")

    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET as any
        ) as Payload
       
        req.user_id = sub
        return next();

    } catch (error) {
        return res.status(401).end();
    }


}