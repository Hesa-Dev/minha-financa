import { IconBrandPaypal, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";


export default function Menu() {


    return (
        <nav className="flex   bg-fixed justify-between items-center h-17   font-bold bg-violet-500">

            <div className="flex gap justify-center items-center ms-3 mb-2">


                <IconBrandPaypal color="#f8fafc" size={75} >

                </IconBrandPaypal>
                <span className="text-white">  MINHAS FINANÇAS </span>

                {/* <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                /> */}
            </div>

            <div className="flex gap-5 justify-center items-center">


                <Link href="/">
                    <span className="px-2 text-white">SOBRE NÓS</span>
                </Link>
                <div>

                    <Link href="/login">
                        <button className="botaoNav flex justify-center items-center text-white gap-2 p-3 me-3 ">
                            <IconUser ></IconUser>
                            <span >  Minha Área </span>
                        </button>
                    </Link>

                </div>



            </div>
        </nav>
    )
}