

import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from 'react';
import {
    PencilSquareIcon,
    UserIcon,
    XMarkIcon,
    PlusCircleIcon
} from "@heroicons/react/20/solid";
import { useRef, useContext } from 'react';
import { Tooltip } from "@nextui-org/react";
import { any } from "zod";
import { Hidden } from "@mui/material";
import { AuthContext } from "@/contexts/AuthContext";


interface FinancaProps {
    tipo?: string
    accao?: string
    closBox?: () => void
}


export default function Financa(props: FinancaProps) {

    return (

        <div >

            <div className="flex justify-center  items-center p-6" >

                {/*  credito */}

                <form
                    className="flex flex-col gap-3 w-2/3  mt-5 border-1 border-indigo-600 p-5 rounded-md">
                    {/* header form   */}
                    <div className="flex flex-col  h-19 bg-indigo-600 align-middle">

                        <div className="text-white grid grid-cols-3 gap-6  pt-2">
                            <div className="col-span-2 items-end justify-end  flex" >
                                <PlusCircleIcon className="h-10 w-10 " />
                                <p className="font-extrabold pl-1"> ENTRADA </p>
                            </div>

                            {/*  fechar chanela  */}
                            <div onClick={props.closBox} className="flex items-end justify-end cursor-pointer">
                                {/* {hidden ? "show" : "hide"} */}
                                <Tooltip content="Fechar Janela">
                                    <XMarkIcon className="h-10 w-10 " />
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    {/* inputs  */}
                    <div className=" flex flex-col gap-2">

                        {/*  Montante  */}
                        <label className="font-semibold text-indigo-600">Montante</label>
                        <input
                            name="nome"
                            type="text"
                            className="border border-indigo-600 shadow-sm rounded h-10"
                            
                        />
                        {/*  Descrição  */}
                        <label className="font-semibold text-indigo-600">Descrição</label>
                        <input
                            name="email"
                            type="email"
                            className="border border-indigo-600 shadow-sm rounded h-10"
                            
                        />

                    </div>

                    <button
                        type="submit"
                        className="
    rounded font-semibold 
    text-white bg-indigo-600 h-10
     hover:bg-white 
     hover:border border-indigo-600
     hover:text-indigo-600"
                    >
                        Salvar
                    </button>

                </form>

            </div>

            {/*  debito  */}



        </div>


    )

}