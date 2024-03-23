
import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from 'react';
import {
    PencilSquareIcon,
    UserIcon,
    XMarkIcon
} from "@heroicons/react/20/solid";
import { useRef, useContext } from 'react';
import {
    Tooltip,
    Select,
    SelectItem,
    user
} from "@nextui-org/react";
import { any } from "zod";
import { Hidden } from "@mui/material";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";

interface userProps {

    hidden?: string
    open?: number,
    closBox?: () => void
}

export default function Add(props: userProps) {

    const { signUp, user } = useContext(AuthContext)
    const [formValues, setFormValues] = useState({
        nome: "",
        email: "",
        password: "",
        tipo: ""
    });

    const tipoUser: any = [
        { tipo: "admin" },

        { tipo: "normal" }
    ]

    async function handleAdd(e: any) {

        e.preventDefault();

        if (!formValues.email ||!formValues.nome|| !formValues.password ||!formValues.tipo) {
            toast.warning("campos obrigatorio! ")
            // return alert("campos obrigatorio")
            return
        }

        if (user?.tipo==="normal") {
             setFormValues({ ...formValues,tipo: "normal" })
        }

        console.log("dados_form: ", formValues)
        await signUp({...formValues})

        console.log("usuario adicionado: ")
    }

    return (


        <div className="flex justify-center  items-center p-6" >

            <form
                onSubmit={handleAdd}
                className="flex flex-col gap-3 w-2/3  mt-5 border-1 border-indigo-600 p-5 rounded-md"

            >

                {/* header form   */}
                <div className="flex flex-col  h-19 bg-indigo-600">

                    <div className="text-white grid grid-cols-3 gap-6  pt-2">
                        <div className="col-span-2 items-end justify-end  flex" >
                            <UserIcon className="h-10 w-10 " />
                            <p className="font-extrabold pl-1"> ADICIONAR UTILIZADOR</p>
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
                        value={formValues.nome}
                        onChange={(e) =>
                            setFormValues({ ...formValues, nome: e.target.value })
                        }
                    // de
                    />
                    {/*  email  */}

                    <label className="font-semibold text-indigo-600">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        className="border border-indigo-600 shadow-sm rounded h-10"
                        value={formValues.email}
                        onChange={(e) =>
                            setFormValues({ ...formValues, email: e.target.value })
                        }
                    />

                    {/*  tipo  */}

                    <div className=" bg-white">
                        <Select
                            label="Tipo"
                            autoFocus={false}
                            // onChange={(e)}
                            onChange={(e) =>
                                setFormValues({ ...formValues, tipo: e.target.value })
                            }
                            // defaultSelectedKeys={[ftipo ? ftipo : "normal"]}

                            //    popoverProps={sty}
                            className="font-semibold  text-indigo-600 border border-indigo-600  h-12"
                        >
                            {tipoUser.map((item: any) => (
                                <SelectItem className="bg-white " key={item.tipo} value={formValues.tipo} >
                                    {item.tipo}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>
                    {/*  password  */}

                    <label htmlFor="password" className="font-semibold text-indigo-600">Password </label>
                    <input
                        name="password"
                        type="password"
                        value={formValues.password}
                        className=" border border-indigo-600 shadow-sm rounded h-10"
                        onChange={(e) =>
                            setFormValues({ ...formValues, password: e.target.value })
                        }
                    // de
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