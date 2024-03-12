

import {
    useState,
    useContext,
    useEffect
} from 'react';
import {
    XMarkIcon,
    PlusCircleIcon
} from "@heroicons/react/20/solid";
import { Tooltip } from "@nextui-org/react";
import { FinanceContext, credito } from "@/contexts/FinanceContext";
import { AuthContext } from "@/contexts/AuthContext";
import { any, string } from 'zod';
import { json } from 'stream/consumers';
import { toast } from "react-toastify";


interface FinancaProps {
    tipo?: string
    accao?: string
    userID?: String
    closBox?: () => void
}


export default function Financa(props: FinancaProps) {

    const [montante, setMontante] = useState(0)
    const [descricao, setDescricao] = useState('')

    async function addCredito(e: any) {

        e.preventDefault();

        var user = props.userID
        var tipo = props.tipo

        const dados: any = {

            user: user,
            tipo: tipo,
            descricao,
            montante,
        }

        console.log("data form : ", dados)

        await credito(dados)
        toast.success("Credito registado com sucesso! ")

    }

    return (

        <div >

            {props.tipo === "credito" ? (

                <div className="flex justify-center  items-center p-6">

                    {/*  credito */}

                    <form action="" onSubmit={addCredito}
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
                            <label className="font-semibold text-indigo-600">Montante (*)</label>
                            <input
                                name="montante"
                                type="number"
                                className="border border-indigo-600 shadow-sm rounded h-10"
                                onChange={e => setMontante(e.target.valueAsNumber)}

                            />
                            {/*  Descrição  */}
                            <label className="font-semibold text-indigo-600">Descrição(*)</label>
                            <input
                                name="descricao"
                                type="text"
                                className="border border-indigo-600 shadow-sm rounded h-10"
                                onChange={e => setDescricao(e.target.value)}
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

                // debito
                : (
                    <div>
                        <p>Debito form ...</p>
                    </div>
                )}


        </div>


    )

}