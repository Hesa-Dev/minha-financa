
import { Request, Response, response } from "express";
import { FinanceService } from "../services/FinanceService"


class FinanceController {

    async add(req: Request, res: Response) {

        if (req.body) {

            const { userID,tipo, montante, descricao} = req.body;

            const finance = new FinanceService()
            const financeService = await finance.add({
                tipo,
                montante,
                descricao,
                userID
            });

            return res.json(financeService)
        }

        return res.json("Empty filds")
    }

    async edit(req: Request, res: Response) {


    }

    async delete(req: Request, res: Response) {


    }

    async getAll(req: Request, res: Response) {

        const  id:any  = req.query.id;
        // const {id}  = req.body
        const serviceFinance = new FinanceService()

        // if (id) {
            const getMovimentos = await serviceFinance.getMovimentoByUserId(id)
            return res.json(getMovimentos)
        // }

        // return "id_Invalido"
        
    }

    async lastM(req: Request, res: Response){

        const tipo : any = req.query.tipo;
        const serviceFinance = new FinanceService()

        const getLastMovimento = await serviceFinance.lastMovimento(tipo)

        return res.json(getLastMovimento)
    }

    async lastSaldo(req:Request, res: Response){

        const serviceFinance = new FinanceService()
        const getLastSaldo = await serviceFinance.lastSaldo()

        return res.json(getLastSaldo)
    }

    async deleteAll(req:Request, res: Response){

        const serviceFinance = new FinanceService()
        const deleteAllM = await serviceFinance.deleteTable()

        return res.json(deleteAllM)
    }
      
}

export { FinanceController }