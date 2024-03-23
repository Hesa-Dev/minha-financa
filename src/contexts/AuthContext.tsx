import { createContext, useEffect, ReactNode, useState } from "react";
import { any, boolean, string } from "zod";
import { api } from "@/services/apiClient";
// import { aPI as api } from "@/services/api";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { toast } from "react-toastify";
import { error } from "console";

type AuthContextData = {
    user?: UserProps;
    isAuthenticated: boolean
    signIn: (credentials: SignInProps) => Promise<void>
    signOut: () => void
    signUp: (credentials: SignUpProps) => Promise<void>
    reloadData: () => void
    response?: string
}

type UserProps = {
    id: string;
    name: string,
    email: string
    tipo?: string
}

type SignInProps = {
    email: string
    password: string;
}

interface SignUpProps {
    nome: string,
    email: string
    password: string;
    tipo?: string
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {

    try {

        // deletando cookies
        console.log("destruindo cookies  ...")
        destroyCookie(null, '@dados.token', { path: '/' })
        destroyCookie(null, '@dados.d', { path: '/' })
        // apos deletar cookies chamar rota home da app 
        Router.push('/login')
    } catch {
        console.log("erro ao deletar cookies ...")
    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function reloadData() {

        const { '@dados.token': token } = parseCookies();
        const { '@dados.id': userId }: any = parseCookies();

        if (token) {

            const resp = await api.post('/user/info/', {
                id: userId
            }).then(function (response) {

                const { id, name, email, tipo } = response.data

                setUser({
                    id,
                    name,
                    email,
                    tipo
                })

                // console.log("var user.id", user?.name)
                // console.log("recover user : ", userId)

            }).catch((error) => {

                console.log("error upadate userinfo:. ", error)
            })
        }
    }

    useEffect(() => {
        reloadData()
    }, [])

    async function signIn({ email, password }: SignInProps) {

        try {

            const response = await api.post('/session', {
                email,
                password
            })
            //    RECUPERAR DADOS DO OBJECTO RESPONSE
            const { id, name, tipo, token } = response.data

            // configurando cookies
            setCookie(undefined, '@dados.token', token, {
                maxAge: 60 * 60 * 24 * 30, // expira 1 mês   
                path: "/"  // caminhos que terão acesso ao cookies
            })

            // configuracao cookie id
            setCookie(undefined, '@dados.id', id, {
                maxAge: 60 * 60 * 24 * 30, // expira 1 mês   
                path: "/"  // caminhos que terão acesso ao cookies
            })
            setUser({
                id,
                name,
                email,
                tipo
            })

            const { '@dados.id': userId } = parseCookies();
            console.log(" user id_cookie  : ", userId)
            console.log(" user id_var   : ", user)
            //  Passar o token para todas requisições
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            // Notifificação | mostrar na tela noticao de sucesso.
            toast.success("Logado com sucesso ! ")

            //  REDIRECIONAR USER PARA DASHBOARD APOS O LOGIN COM SUCESSO
            Router.push('/dashboard')

        } catch (error) {

            toast.error("Erro ao fazer login! ")
            // console.log("erro na requisicao login", error)
        }
    }

    async function signUp({ nome, email, password, tipo }: SignUpProps) {

        if (!nome || !email || !password || !tipo) {
            toast.warning("Campos Obrigatório ... ! ")
            // console.log("Campos Obrigatório",nome , "|" , email ,"|" ,tipo ,"|",password ) 
        }
        else {

            const response = await api.post('/user/add', {
                name: nome, // quando o nome do parametro(name) do request for diferente da váriavel(nome)  
                email,
                password,
                tipo
            }).then(function (res) {
                console.log("response : ", res.data)

            }).catch(function (error) {

                // console.log("erro na requisicao registo", error)
                toast.success("erro na requisicao registo  ! ", error)
            })
        }

    }
    return (

        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp, reloadData }}>
            {children}
        </AuthContext.Provider>
    )
}