import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./AuthTokenError";
import { signOut } from "@/contexts/AuthContext";
import * as React from "react";

export function setupApiClient(ctx = undefined) {

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
        // qualquer error 401 devemos deslogar user 
        if (error.response?.status === 401) {

            if (typeof window !== undefined) {
                // chamar function deslogar user 
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


//  FINANCAS API
export function financeApi(ctx = undefined) {

    let cookies = parseCookies(ctx)
    const api = axios.create({
        baseURL: 'http://localhost:5555/finance',
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
