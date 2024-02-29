import { Request, Response } from "express";

import { DetailUserService } from "../services/DetailUserService";

class DetailUserController{

    async handle(req: Request, res: Response) {

        // const user_id = req.user_id
        // const user_mail = req.em

        const {id} = req.body

        // console.log("id_user : ",  user_id)

        const detailUserService = new DetailUserService()
        const user = await detailUserService.execute(id);

        return res.json(user)

    }

}

export {DetailUserController}