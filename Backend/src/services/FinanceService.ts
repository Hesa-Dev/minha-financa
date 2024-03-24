
import prismaClient from "../prisma"
import { hash } from "bcryptjs"

import {dataTime} from "../utils/utilis"

interface financeREQ {
    userID: string,
    tipo: string,
    montante: number,
    descricao: string,
}

class FinanceService {

    async add({ userID, tipo, montante, descricao }: financeREQ) {

        const currentDate = dataTime();

        if (userID && tipo && montante && descricao) {


            if (tipo === "debito") {

                const lastRecord = await prismaClient.movimento.findFirst({
                    orderBy: {
                        id: 'desc'
                    }
                })

                if (lastRecord) {

                    if (lastRecord.saldo >= montante) {

                        const saldoUpdate = lastRecord.saldo - montante
                        const addM = await prismaClient.movimento.create({
                            data: {
                                tipo: tipo,
                                descricao: descricao,
                                montante: montante,
                                userID: userID,
                                saldo: saldoUpdate,
                                data:  currentDate
                            }
                        })
                        return lastRecord.saldo
                    }
                    return "insuficiente"
                }

            }
            else {

                const lastRecord = await prismaClient.movimento.findFirst({
                    orderBy: {
                        id: 'desc'
                    }
                })
                var saldoUpdate = 0

                if (  lastRecord) {

                    if (lastRecord.saldo>=0) {
                        
                        saldoUpdate = lastRecord?.saldo + montante
                    }
                }
                else{

                    saldoUpdate = montante
                }

                const addM = await prismaClient.movimento.create({
                    data: {
                        tipo: tipo,
                        descricao: descricao,
                        montante: montante,
                        userID: userID,
                        saldo: saldoUpdate,
                        data:  currentDate
                    },
                    select: {
                        tipo: true,
                        montante: true,
                        userID: true
                    }
                })

                const lastSaldo = await prismaClient.movimento.findFirst({
                    orderBy: {
                        id: 'desc'
                    }
                })
                return lastSaldo?.saldo
            }
        }

        throw new Error("CAMPOS VAZIOS!")
    }

    async edit({ ...arr }: financeREQ) {


    }

    async delete({ ...arr }: financeREQ) {


    }

    async getMovimentoByUserId(id: any) {

        if (id) {

            const user = await prismaClient.user.findFirst({
                where: { id: id } // ou onde: { name: "Nome do Usuário" } ou onde: { email: "email@example.com" }
              }); 

              if (user) {

                const userMovimento = await prismaClient.movimento.findMany({
                    where:{
                        userID:id
                    },
                    select: {
                        id: true,
                        data: true,
                        tipo: true,
                        montante: true,
                        saldo:true,
                        descricao: true,
                        userID: true
                    }
                })

                return userMovimento
              }

            return "user_invalido"

        }

        throw new Error("id vazio")
    }

    async lastMovimento(tipo:string){

        if (tipo) {
            const lastM = await prismaClient.movimento.findFirst({
                orderBy: {
                    id: 'desc'
                },
                where: {
                    tipo:tipo
                },
               
                select: {
                    id:true,
                    montante: true,
                }
            })
    
            if (lastM) {
    
                return lastM
            }
            return "tabela vazia" 
        }

        return "empty" 
       
    }

    async lastSaldo(){

        const lastS = await prismaClient.movimento.findFirst({
            orderBy: {
                id: 'desc'
            },
            select: {
                saldo:true,
            }
        })
        if (lastS) {
            
            return lastS
        }

        return "tabela vazia"
        
    }

    async deleteTable(){

        const deletMovimentos = await prismaClient.movimento.deleteMany({})

        return deletMovimentos

    }

}

export { FinanceService }