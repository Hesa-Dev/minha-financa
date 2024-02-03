import {  Router } from "express";

import { UserController } from './controller/UserController';
import { AuthUserController } from "./controller/AuthUserController";
import { DetailUserController } from "./controller/DetailUserController";

import { isAuthenticated } from "./middleware/isAuthenticated";

const router = Router();

//  ROTA REGISTAR UTILIZADOR 
router.post('/user', new UserController().handler)

// DELETAR UTILIZADOR
router.delete('/user/:id', new UserController().handler)
// LOGIN
router.post('/session', new AuthUserController().handle)

// INFO USER 
router.get('/userinfo', isAuthenticated, new DetailUserController().handle)


router.get('/teste/:id', async(req,res)=>{
    // req.param.name => permite acessar os paramentro das url 
    //  ex:  app.get('/teste/:id'   id é parametro da requisicao 
    const idx = req.query.id 
const testes= ['test1' , 'test2' , 'test3'];

    // return res.json(testes[idx]);
    
    // return video;
    // return response.status(201).send()
    // return await request.json({})
    // return await request({console.log("logado com sucesso")})
    // return response.json({teste: "logado com sucesso"})
   return res.json(testes)
})


export  {router};