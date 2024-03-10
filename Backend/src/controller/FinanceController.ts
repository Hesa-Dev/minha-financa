
import { Request, Response, response } from "express";
import { FinanceService } from "../services/FinanceService"


class FinanceController {

    async add(req: Request, res: Response) {

        if (req.body) {

            const { tipo, montante, descricao, user } = req.body;

            const finance = new FinanceService()
            const financeService = await finance.add({
                tipo,
                montante,
                descricao,
                user,
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

        const  id :any  = req.params;
        const serviceFinance = new FinanceService()

        const getMovimentos = await serviceFinance.getMovimento(id)

        return res.json(getMovimentos)
    }
      
}

export { FinanceController }