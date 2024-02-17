import axios, {AxiosError}  from "axios";
import { error } from "console";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./AuthTokenError"; 
import { signOut } from "@/contexts/AuthContext";

export function setupApiClient(ctx = undefined){

    let cookies = parseCookies(ctx)
    const api = axios.create({
        baseURL: 'http://localhost:5555',
        headers:{
            Authorization: `Bearer ${cookies['@dados.token']}`
        }

    })

    api.interceptors.response.use(response=>{
        return response;
    },(error: AxiosError)=>{
        // qualquer error 401 devemos deslogar user 
        if (error.response?.status===401) {
            if (typeof window!==undefined) {
                // chamar function deslogar user 
                signOut();

            }
            else{
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error) 
    })

    return api
}