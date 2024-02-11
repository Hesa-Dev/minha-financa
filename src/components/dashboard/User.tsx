
import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import {
    PencilSquareIcon, UserIcon
} from "@heroicons/react/20/solid";
import { Tooltip } from "@nextui-org/react";
export default function User() {


    return (

        <div className="flex justify-center items-center p-6">

            <form
                className="flex flex-col gap-3 w-2/3  mt-5 border-1 border-indigo-600 p-5 rounded-md">

                {/* logo da empresa  */}
                <div className="flex flex-col  h-21 bg-indigo-600 ">

                    <div className="text-white flex justify-center items-center pt-2">
                        <UserIcon className="h-10 w-10 " />
                        <p className="font-extrabold"> GESTÃO DE UTILIZADOR </p>
                    </div>

                    <div className="flex justify-end items-end cursor-pointer text-white mr-3 mb-3">
                        <Tooltip content="Editar Utilizador">
                            <PencilSquareIcon className=" h-10 w-10 hover:border border-1 border-white rounded-md" />
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
                    />
                    {/*  email  */}

                    <label className="font-semibold text-indigo-600">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        className="border border-indigo-600 shadow-sm rounded h-10"
                    />
                    {/*  password  */}

                    <label htmlFor="password" className="font-semibold text-indigo-600">Password </label>
                    <input
                        name="password"
                        type="password"
                        className=" border border-indigo-600 shadow-sm rounded h-10"
                    />

                    <label
                        htmlFor="password"
                        className="font-semibold text-indigo-600 text-center cursor-pointer"
                    >
                        <Link href="/login/login">
                            Login
                        </Link>
                    </label>
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