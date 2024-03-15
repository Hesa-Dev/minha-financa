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
router.post('/user/add', new UserController().handleAdd)
// add  user c/photo
router.post('/user-photo',upload.single('file'),  new UserController().addPhoto)

// DELETAR UTILIZADOR
router.post('/user/delete', new UserController().delete)

// ATUALIZAR DADOS DO UTILIZADOR
router.post('/user/update' , new UserController().updateUser)

// LISTAR TODOS UTILIZADORES
router.get('/user/all' , new UserController().getAll)

// LOGIN
router.post('/session', new AuthUserController().handle)

// INFO USER | isAuthenticated => middleware
router.get('/userinfo/', new DetailUserController().handle)


// INFO USER | v2 isAuthenticated => middleware
router.post('/user/info', new DetailUserController().handleInfo)

// USER INFO V3
router.get('/userinfo/v2/:id', new DetailUserController().handleInfo)

// ROTAS FINANCAS 
// add 
router.post('/finance/add' ,  new FinanceController().add)
// Listar Todos Movimentos do Usuario 
router.get('/finance/all' ,  new FinanceController().getAll)

// ULTIMO MOVIMENTO [CREDITO/DEBITO] 
router.get('/finance/last/movimento/',  new FinanceController().lastM)

// ULTIMO SALDO 
router.get('/finance/last/saldo',  new FinanceController().lastSaldo)

// deletar toda tabela 
router.get('/finance/delet/all',  new FinanceController().deleteAll)

// deletar 
router.post('/finance/delete', isAuthenticated,  new UserController().handleAdd)
// editar 
router.post('/finance/edit', isAuthenticated,  new UserController().handleAdd)
// get 
router.post('/finance/data', isAuthenticated,  new UserController().handleAdd)

export  {router};