
// import Dashboard from "@/components/dashboard/Dashboard"

import ClientArea from "@/components/dashboard/ClientArea";
import { canSSRAuth } from "@/utils/canSSRAuth";

export default function Dashboard(){

return (

    <div>
        <ClientArea/>
    </div>
)

}
//    Controlo de Acesso | Apenas utilizadores com Sessão(login) aberta  podem acessar esta página
export const getServerSideProps= canSSRAuth(async(ctx)=>{
    return {
        props: {}
    }
  })

