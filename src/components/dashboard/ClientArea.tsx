import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";

export default function ClientArea() {


    return (

        <div>
            {/*  Menu  */}
            <nav className="flex   bg-fixed justify-center items-center h-17   font-bold bg-violet-500">

                <div className="flex gap justify-center items-center">

                    <IconBrandPaypal color="#f8fafc" size={75} >

                    </IconBrandPaypal>
                    <span className="text-white">  MINHAS FINANÇAS </span>

                </div>
            </nav>

            {/*  Body */}

            <div className="flex gap-3 container">

                {/*  dados do utilizador  */}
                <div className="flex flex-col border justify-center items-center border-zinc-700 ms-5 mt-5 rounded w-2/6">
                    <Image
                        src="/avatar.svg"
                        alt="profile-photo"
                        width={100}
                        height={100}
                    />

                    <div className="border-b-2  border-violet-400">
                        <h3 className="text-center mt-2 font-semibold  ">Jose Almeida Pedro </h3>

                        <div className=" flex justify-between mb-3 gap-5">
                            <span > Conta ativa desde 10/2022</span>
                            <div className="flex justify-center gap-1 cursor-pointer">
                                <IconLogout color="#D29CE8" />
                                <span > sair </span>

                            </div>

                        </div>

                    </div>

                    {/*  itens do menu esquerda  */}
                    <div className="flex flex-col ">

                        <div className="flex justify-between text-white font-semibold border rounded bg-violet-500">
                            <span>Dados Pessoais</span>
                            <IconArcheryArrow></IconArcheryArrow>
                        </div>
                    </div>
                </div>

                <div className="me-3 mt-5 border flex flex-col    border-violet-400">

                    {/*  background  */}
                    <div className="rounded  bg-violet-700 justify-center items-center text-white font-bold">
                             <h1 className="text-center">Bem Vindo a Sua Área</h1>
                    </div>

{/*   content - apresentação das div  */}
                    <div>

                    </div>

                </div>



            </div>
        </div>



    )
}