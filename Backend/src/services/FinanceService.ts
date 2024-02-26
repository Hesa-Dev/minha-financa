
import prismaClient from "../prisma"
import { hash } from "bcryptjs"

interface financeREQ {
    user: string,
    tipo: string,
    montante: number,
    descricao: string,
}

class FinanceService {

    async add({ user, tipo, montante, descricao }: financeREQ) {

        if (user && tipo && montante && descricao) {

            
            if (tipo == "debito") {

                const lastRecord = await prismaClient.movimento.findFirst({
                    orderBy: {
                        id: 'desc'
                    },
                    take:1 
                })

                if (lastRecord) {

                    if (lastRecord.saldo > montante) {

                      const  saldoUpdate = lastRecord.saldo - montante
                        const addM = await prismaClient.movimento.create({
                            data: {
                                tipo: tipo,
                                descricao: descricao,
                                montante: montante,
                                userID: user,
                                saldo: saldoUpdate
                            }
                        })
                        return lastRecord.saldo
                    }
                    return "insuficiente"
                }

            }
            else {

               var saldoUpdate=0
               saldoUpdate+=montante
                const addM = await prismaClient.movimento.create({
                    data: {
                        tipo: tipo,
                        descricao: descricao,
                        montante: montante,
                        userID: user,
                        saldo: saldoUpdate
                    }
                })

                return addM
            }
        }

        throw new Error("CAMPOS VAZIOS!")
    }

    async edit({ ...arr }: financeREQ) {


    }

    async delete({ ...arr }: financeREQ) {


    }

    async get({ ...arr }: financeREQ) {

    }
}

export { FinanceService }