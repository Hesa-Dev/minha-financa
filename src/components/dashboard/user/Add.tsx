
import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from 'react';
import {
    PencilSquareIcon,
    UserIcon,
    XMarkIcon
} from "@heroicons/react/20/solid";
import { useRef, useContext } from 'react';
import { Tooltip } from "@nextui-org/react";
import { any } from "zod";
import { Hidden } from "@mui/material";
import { AuthContext } from "@/contexts/AuthContext";



// import ClientArea from "./ClientArea";

// const [formValues, setFormValues] = useState({
//     fullName: "",
//     address: "",
//     number: "",
//     occupation: ""
//   });


interface userProps {

    hidden?: string
    open?: number,
    closBox?: () => void
}

export default function Add(props: userProps) {

    const { signOut, user } = useContext(AuthContext)

    const formRef = useRef(null);

    // const handleReset = () => {
    //     if (formRef.current) {
    //         formRef.current.reset();

    //     }
    // };

    return (

        <div className="flex justify-center  items-center p-6" >

            <form
                className="flex flex-col gap-3 w-2/3  mt-5 border-1 border-indigo-600 p-5 rounded-md"
                ref={formRef}
            >

                {/* header form   */}
                <div className="flex flex-col  h-19 bg-indigo-600">

                    <div className="text-white grid grid-cols-3 gap-6  pt-2">
                        <div className="col-span-2 items-end justify-end  flex" >
                            <UserIcon className="h-10 w-10 " />
                            <p className="font-extrabold pl-1"> GESTÃO DE UTILIZADOR </p>
                        </div>

                        {/*  fechar chanela  */}
                        <div onClick={props.closBox} className="flex items-end justify-end cursor-pointer">
                            {/* {hidden ? "show" : "hide"} */}
                            <Tooltip content="Fechar Janela">
                                <XMarkIcon className="h-10 w-10 " />
                            </Tooltip>
                        </div>

                    </div>

                    {/*  EDITAR UTILIZADOR  */}
                    <div className="flex flex-col justify-end items-end cursor-pointer text-white mt-2 mr-3 mb-3">
                        <Tooltip content="Editar Utilizador">
                            <PencilSquareIcon className="h-10 w-10 hover:border border-1 border-white rounded-md" />
                        </Tooltip>
                    </div>

                </div>

                {/* inputs  */}
                <div className=" flex flex-col gap-2">

                    {/*  Nome  */}
                    <label className="font-semibold text-indigo-600">Nome</label>
                    <input
                        name="nome"
                        type="text"
                        className="border border-indigo-600 shadow-sm rounded h-10"
                        defaultValue={1}
                        // disabled
                    />
                    {/*  email  */}

                    <label className="font-semibold text-indigo-600">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        className="border border-indigo-600 shadow-sm rounded h-10"
                        // disabled
                    />
                    {/*  password  */}

                    <label htmlFor="password" className="font-semibold text-indigo-600">Password </label>
                    <input
                        name="password"
                        type="password"
                        className=" border border-indigo-600 shadow-sm rounded h-10"
                        // disabled
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
    )

}