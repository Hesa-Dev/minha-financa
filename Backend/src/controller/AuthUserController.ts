import { Request, Response } from "express";
import { AuthUserService } from "../services/AuthUserService";


class AuthUserController {

    async handle(req: Request, res: Response) {

        const { email, password } = req.body;
        const authUserSevice = new AuthUserService();

        const auth = await  authUserSevice.login({email,password})

        return res.json(auth)
    }

}

export { AuthUserController }