
import prismaClient from "../prisma"
import { hash } from "bcryptjs"

interface financeREQ {
    userID: string,
    tipo: string,
    montante: number,
    descricao: string,
}

class FinanceService {

    async add({ userID, tipo, montante, descricao }: financeREQ) {

        if (userID && tipo && montante && descricao) {

            
            if (tipo === "debito") {

                const lastRecord = await prismaClient.movimento.findFirst({
                    orderBy: {
                        id: 'desc'
                    }
                })

                if (lastRecord) {

                    if (lastRecord.saldo >= montante) {

                      const  saldoUpdate = lastRecord.saldo - montante
                        const addM = await prismaClient.movimento.create({
                            data: {
                                tipo: tipo,
                                descricao: descricao,
                                montante: montante,
                                userID: userID,
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
                        userID: userID,
                        saldo: saldoUpdate
                    },
                    select:{
                        tipo:true,
                        montante:true,
                        userID:true
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

    async getMovimento(id:string) {

        if (id) {
           
            const movimentos = await prismaClient.movimento.findMany({
                where:{
                    userID:id
                },
                select: {
                    id: true,
                    data: true,
                    tipo:true,
                    montante:true,
                    descricao:true
                }
            })
            return movimentos
        }
      
        throw new Error("id vazio")
    }
}

export { FinanceService }