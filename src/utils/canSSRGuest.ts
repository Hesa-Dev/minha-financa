import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetServerSidePropsResult
} from "next";
import { parseCookies } from "nookies";
import { canSSRAuth } from "./canSSRAuth";

// Pagina Acessadas para os visitantes | Ou seja utilizadores que não tem sessão iniciada 
export function canSSRGuest<P>(fn: GetServerSideProps<any>) {

    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
        const cookies = parseCookies(ctx);

        // Se o utilizador tiver a sessão aberta redirecionar | 
        if (cookies['@dados.token']) {
            return {
                redirect: {
                    destination: '/dashboard',
                    permanent: false
                }
            }
        }
        return await fn(ctx)
    }
}

export const getServerSideProps = canSSRAuth(async (ctx) =>{
    return {props:{}}
})