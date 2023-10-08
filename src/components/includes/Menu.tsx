import { IconUser } from "@tabler/icons-react";
import Image from "next/image";


export default function Menu() {


    return (
        <nav className="flex   bg-fixed justify-between items-center h-16  text-white font-bold bg-blue-600">

            <div className="flex gap">
                <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                ></Image>
            </div>

            <div className="flex gap-5 justify-center items-center">

                <span className="px-5">APP MINHAS FINANCAS </span>
                <span className="px-2">Sobre Nós</span>
                <div>
                    <button className="botaoNav flex justify-center items-center gap-2 p-3 me-3 text-white">
                        <IconUser ></IconUser>
                        <span >  Minha Área </span>
                    </button>
                </div>


              
            </div>
        </nav>
    )
}