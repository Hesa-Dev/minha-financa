import {  Router } from "express";
import multer from "multer";

import { UserController } from './controller/UserController';
import { AuthUserController } from "./controller/AuthUserController";
import { DetailUserController } from "./controller/DetailUserController";
import {FinanceController} from "./controller/FinanceController";

import { isAuthenticated } from "./middleware/isAuthenticated";
import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// ROTAS DO UTILIZADOR 

//  ROTA ADD UTILIZADOR 
router.post('/user', new UserController().handler)
router.post('/user-photo',upload.single('file'),  new UserController().addPhoto)

// DELETAR UTILIZADOR
router.delete('/user/:id', new UserController().handler)

// LISTAR TODOS UTILIZADORES
router.get('/user/all' , new UserController().getAll)

// LOGIN
router.post('/session', new AuthUserController().handle)

// INFO USER | isAuthenticated => middleware
router.get('/userinfo', new DetailUserController().handle)

// USER INFO V2
router.get('/userinfo/v2/:id', new DetailUserController().handleInfo)


// ROTAS FINANCAS 
// add 
router.post('/finance/add' ,  new FinanceController().add)
// deeletar 
router.post('/finance/delete', isAuthenticated,  new UserController().handler)
// editar 
router.post('/finance/edit', isAuthenticated,  new UserController().handler)
// get 
router.post('/finance/data', isAuthenticated,  new UserController().handler)

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