import { createContext, useEffect, ReactNode, useState, use } from "react";
import { any, array, boolean } from "zod";
import { financeApi } from "@/services/api";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { toast } from "react-toastify";
import { promises } from "dns";
import { json } from "stream/consumers";

type FinanceData = {
    movimento?: Movimentos;
    credito: (infoEntrada: Movimentos) =>Promise<any>
    debito: (infoSaida: Movimentos) => void
    last : (tipo: string) => Promise<void>
}

interface Movimentos{
  user:string,
  tipo:string,
  montante:number,
  descricao:string,
}

export const FinanceContext = createContext({} as FinanceData)

 export  async function credito({user, tipo, montante, descricao}: Movimentos) {

    const dataM = {user, tipo, montante , descricao}
    // const res:Response

    console.log("data context : " , dataM )

     try {
        const api = financeApi();
       

        const response = await api.post('/finance/add', {
            user,
            tipo,
            descricao,
            montante
        })

     

        // const { resp } = response.data
        console.log(response)

        // return json(response)

        // return res.json(response)

     } catch (error) {
        
        alert("error " +  error)
     }
 }

 export  async function debito({...array}: Movimentos) {

    const api = financeApi();
    try {
        
        const response = await api.post('/finance/add', {
            array
        })

        const { resp } = response.data

     } catch (error) {
        
        // toast.error("Erro ao fazer login! ")
        alert("error " +  error)
     }
    
 }