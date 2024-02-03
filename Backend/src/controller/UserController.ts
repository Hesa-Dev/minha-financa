import { Request, Response, response } from "express";
// import { UserService } from "../services/UserService";
import { UserService } from "../services/UserService";

class UserController {

    async handler(req: Request, res: Response) {
        // console.log(req.body)
        const { name, email, password } = req.body;
        const service = new UserService()
        const userP = await service.add({
            name,
            email,
            password
        });

        // console.log(name)

        return res.json(userP)
    }

}

export { UserController }