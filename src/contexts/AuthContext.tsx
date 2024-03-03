import { createContext, useEffect, ReactNode, useState } from "react";
import { any, boolean, string } from "zod";
import { api } from "@/services/apiClient";
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

interface SignUpProps {
    nome: string,
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

        // deletando cookies
        console.log("destruindo cookies  ...")
        destroyCookie(null, '@dados.token', { path: '/' })
        // apos deletar cookies chamar rota home da app 
        Router.push('/login')
    } catch {
        console.log("erro ao deletar cookies ...")
    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    // alert("inside authProvider...")

    // Prover dados do user logado na app para que seja acessado em qualaquer pag.
    //  que importa o AuthContext
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    useEffect(() => {

        const userInfo = async () => {

            try {

                const { '@dados.token': token } = parseCookies();
                const { '@dados.id': userId }: any = parseCookies();

                if (token) {

                    console.log( "var user.id" , user?.id)
                    console.log("recover user : ", userId)

                    const resp = await api.get('/userinfo/', {
                        params: {
                            id: userId
                        }
                    }).then(async response => {

                        console.log("response : update " , response.data)
                        const { id, name, email } = await response.data;
                        
                        setUser({
                            id,
                            name,
                            email
                        })

                        // console.log("saving user ... : ", user)
                    }).catch(function (error) {

                        if (error.response) {

                            console.error(error.response.data);
                            console.error(error.response.status);
                            console.error(error.response.headers);
                        }
                        else if (error.request) {

                            console.error(error.request);
                        }
                        else {

                            console.error('Erro axios ', error.message);
                            // signOut()

                        }
                    })
                }

            }

            catch (error) {
                console.log("falha na busca ... ", error)
            }

        }

        userInfo()


        // salvar dados do usuario para acessar em qualquer pagina 
        // const 
        // const { '@dados.token': token } = parseCookies();

        // if (token) {

        //     const { '@dados.id': userId } = parseCookies();
        //     console.log("recover user : ", userId)

        //  const resp = await  api.get('/userinfo', {
        //         params: {
        //             id: userId
        //         }
        //     }).then(async response => {
        //         const { id, name, email } = await response.data;
        //         setUser({
        //             id,
        //             name,
        //             email
        //         })
        //     }).catch(() => {
        //         signOut()
        //     })
        // }

    }, [])

    //  Funcao para login 
    async function signIn({ email, password }: SignInProps) {

        try {

            const response = await api.post('/session', {
                email,
                password
            })
            //    RECUPERAR DADOS DO OBJECTO RESPONSE
            const { id, name, token } = response.data

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
                email
            })

            const { '@dados.id': userId } = parseCookies();
            console.log(" user id : ", userId)
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

    async function signUp({ nome, email, password }: SignUpProps) {

        try {
            const response = await api.post('/user', {
                nome,
                email,
                password
            })

            // console.log("add com sucesso")
            toast.success("Utilizador adicionado com Sucesso  ! ")

        } catch (error) {

            console.log("erro na requisicao registo", error)
            toast.success("erro na requisicao registo  ! ")
        }
    }
    return (

        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}