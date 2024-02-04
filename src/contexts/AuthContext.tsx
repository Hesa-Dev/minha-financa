import { createContext, ReactNode, useState } from "react";
import { any, boolean } from "zod";
import { api } from "@/services/apiClient";
import { destroyCookie } from "nookies";
import Router from "next/router";

type AuthContextData = {
    user?: UserProps;
    isAuthenticated: boolean
    signIn: (credentials: SignInProps) => Promise<void>
    signOut: () => void
}

type UserProps = {
    id: string;
    name: string,
    email: string
}

type SignInProps = {
    email: string
    password: string;
}

// interface UserProps {
//     id: string;
//     name: string,
//     email: string
// }

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

// funcão deslogar utilizador 
export function signOut() {

    try {

        //  deletando cookies
        destroyCookie(undefined, '@dados.token')
        // apos deletar cookies chamar rota home da app 
        Router.push('/')
    } catch {
        console.log("erro ao deletar cookies ...")
    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    //  Funcao para login 
    async function signIn({ email, password }: SignInProps) {

        try {
            console.log("email: ", email)
            console.log("password: ", password)

            const response = await api.post('/session', {
                email,
                password
            })
            console.log(response.data)
        } catch (error) {

        }
    }
    return (

        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}