import { Request, Response, response } from "express";
// import { UserService } from "../services/UserService";
import { UserService } from "../services/UserService";

class UserController {

    async handleAdd(req: Request, res: Response) {
        // console.log(req.body)
        const { name, email, password } = req.body;
        const service  =  new   UserService()

         await service.add({
            name,
            email,
            password
        }) 

        return res.json( service )
    }

    // Cadastrar utilizador c/photo
    async addPhoto(req: Request, res: Response) {

        const { name, email, password} = req.body;
        const service = new UserService()

        if (!req.file) {
            throw new Error("Ficheiro Vazio !")
        }
        const { originalname, filename:photo } = req.file;
        // console.log(filename)

        const userP = await service.addprofile({
            name,
            email,
            password,
            photo
        });

        return res.json(userP)
    }

    // listar todos utilizadores
    async  getAll( req: Request,res: Response) {
 
        const service = new UserService()
        const userP = await service.getAll()

        return res.json(userP)
    } 

    async delete( req: Request,res: Response ){

        const {id} = req.body
        const service = new UserService()
        await service.delete(id)

        return res.json(service)

    }


}

export { UserController }