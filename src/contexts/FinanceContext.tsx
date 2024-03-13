import { createContext, useEffect, ReactNode, useState, use } from "react";
import { any, array, boolean } from "zod";
// import { financeApi } from "@/services/api";
import { api } from "@/services/apiClient";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { toast } from "react-toastify";
import { promises } from "dns";
import { json } from "stream/consumers";

type FinanceData = {
    movimento?: Movimentos;
    credito: (infoEntrada: Movimentos) => Promise<any>
    debito: (infoSaida: Movimentos) => void
    last: (tipo: string) => Promise<void>
}

interface Movimentos {
    user: string,
    tipo: string,
    montante: number,
    descricao: string,
}

export const FinanceContext = createContext({} as FinanceData)

export async function addMovimento({ user, tipo, montante, descricao }: Movimentos) {

    if (user && tipo && montante && descricao) {

        const response = await api.post('/finance/add', {
            userID: user,
            tipo,
            montante,
            descricao,

        }).then(function (resp) {
            console.log(resp.data)

            const valor = montante.toString() 
            switch (tipo) {

                case "debito":
                    toast.success("Debito Registado -" + valor + " € " )
                    break;
                default:
                    toast.success("Credito Registado +"+ valor + "€" )
                    break;
            }

        }).catch(function (error) {
            console.log("erro na requisicao :", error)
        })
    }

    console.log("Campos Vazios ...[Finance_Context]")

}

export async function debito({ ...array }: Movimentos) {

    // const api = financeApi();
    try {

        const response = await api.post('/finance/add', {
            array
        })

        const { resp } = response.data

    } catch (error) {

        // toast.error("Erro ao fazer login! ")
        alert("error " + error)
    }

}