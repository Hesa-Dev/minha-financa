import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetServerSidePropsResult
} from "next";
import { parseCookies, destroyCookie } from "nookies"
import { AuthTokenError } from "@/services/AuthTokenError";
import { any } from "zod";

// Pagina Acessadas para utilizadores com sessão aberta 
export function canSSRAuth<P>(fn: GetServerSideProps<any>) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        
        const cookies = parseCookies(ctx);
        const token = cookies['@dados.token']
        

        // Se o utilizador não  tiver a sessão aberta redirecionar  para tela login  
        if (!token) {
            return {
                redirect: {
                    destination: '/login/login',
                    permanent: false
                }
            }
        }

        // No caso de  utilizador ter  a sessão validos. 
        try {
            
            return await fn(ctx)
        } 
        catch (error) {

            if (error instanceof  AuthTokenError) {
                destroyCookie(ctx , '@dados.token')

                return  {
                    redirect: {
                        destination:'/login/login',
                        permanent: false
                    }
                }
            }

            return  {
                redirect: {
                    destination:'/login/login',
                    permanent: false
                }
            }

        }
        
    }
}