import Login from "@/components/login/Login";
import { canSSRGuest } from "@/utils/canSSRGuest";


export default function PagLogin() {
    return (
  
        <div>
            <Login/>
        </div>
      
    )
  }

//    Controlo de Acesso | Apenas utilizadores sem login podem acessar esta página 
  export const getServerSideProps= canSSRGuest(async(ctx)=>{
    return {
        props: {}
    }
  })
  
 