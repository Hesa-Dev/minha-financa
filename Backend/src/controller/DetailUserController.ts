import { Request, Response } from "express";

import { DetailUserService } from "../services/DetailUserService";

class DetailUserController {

    async handle(req: Request, res: Response) {

        // const user_id = req.user_id
        // const user_mail = req.em

        const { id } = req.body
        

        if (id) {

            const detailUserService = new DetailUserService()
            const user = await detailUserService.execute(id);
            // const {id} = req.body
            // console.log("id_user : ",  user_id)
            return res.json(user)
        }

        return("empty id")
    }

    //  user info v2 
    async handleInfo(req: Request, res: Response) {

        // const { id } = req.body
        // const {id} = req.body
        // const {id}  = req.params
        const {id} = req.body

        const detailUserService = new DetailUserService()
        const user = await detailUserService.executeInfo(id);

        return res.json(user)

    }

}

export { DetailUserController }