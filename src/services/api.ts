import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./AuthTokenError";
import { signOut } from "@/contexts/AuthContext";
import * as React from "react";


// export const aPI = axios.create({
   
//     baseURL: 'http://localhost:5555',
//     //  timeout: 10000,
//     headers: {
//         Authorization: `Bearer ${parseCookies(undefined)['@dados.token']}`,
//         'Content-Type': 'application/json',
//         // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//         'Access-Control-Allow-Methods':'*',
//     },
// })

// //  TESTE API 
// aPI.interceptors.response.use(function (response) {

//     console.log ("API RESPONSE " , response)
//     return response;

// }, function (error: AxiosError) {

//     console.log("API ERROR RESPONSE | " , error )

//     // qualquer error 401 devemos deslogar user 
//     if (error.response?.status === 401) {

//         // console.log("API | ERRO NA AUTENTICAÇÃO ")
//         return Promise.reject(new AuthTokenError())
//         // }
//     }

//     return Promise.reject(error)
// })

// aPI.interceptors.request.use(function (request) {

//     // Faz alguma coisa antes da requisição ser enviada
//     console.log ("Api config|REQUEST " , request)

//     return request;

// }, function (error) {
//     // Faz alguma coisa com o erro da requisição
//     // console.log("API ERROR. REQUEST | " , error )
//     return Promise.reject(error);
// });

//  TESTE API END 




export function setupApiClient(ctx = undefined) {

    let cookies = parseCookies(ctx)
    const api = axios.create({
        baseURL: 'http://localhost:5555',
        //  timeout: 10000,
        headers: {
            Authorization: `Bearer ${cookies['@dados.token']}`,
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Methods':'*',
        },
        
    })

    //  interceptar requisicao 
    api.interceptors.request.use(function (request) {

        // Faz alguma coisa antes da requisição ser enviada
        console.log ("Api config|REQUEST " , request)

        return request;

    },function (error) {
        // Faz alguma coisa com o erro da requisição
        // console.log("API ERROR. REQUEST | " , error )
        return Promise.reject(error);
    });

   //  INTERCEPTANDO RESPONSE 
    api.interceptors.response.use(function (response) {

        console.log ("API RESPONSE " , response)
        return response;

    }, function (error: AxiosError) {


        console.log("API ERROR RESPONSE | " , error )

        // qualquer error 401 devemos deslogar user 
        if (error.response?.status === 401) {

            // console.log("API | ERRO NA AUTENTICAÇÃO ")
            return Promise.reject(new AuthTokenError())
            // }
        }

        return Promise.reject(error)
    })

    return api
}



//  FINANCAS API
export function financeApi(ctx = undefined) {

    let cookies = parseCookies(ctx)
    // criar instancia da api 
    // https://axios-http.com/docs/instance
    
    const api = axios.create({
        baseURL: 'http://localhost:5555',
        headers: {
            Authorization: `Bearer ${cookies['@dados.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if (error.response?.status === 401) {

            if (typeof window !== undefined) {
                signOut();
            }
            else {
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error)
    })

    return api

}


// user api 

export function userAPI(ctx = undefined) {

    let cookies = parseCookies(ctx)
    const api = axios.create({
        baseURL: 'http://localhost:5555',
        headers: {
            Authorization: `Bearer ${cookies['@dados.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {

        return Promise.reject(error)
    })

    return api
}
