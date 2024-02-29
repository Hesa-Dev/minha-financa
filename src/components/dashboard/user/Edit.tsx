
import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";
import { useState, useEffect } from 'react';
import {
    PencilSquareIcon,
    UserIcon,
    XMarkIcon
} from "@heroicons/react/20/solid";
import { useRef, useContext } from 'react';
import { Tooltip } from "@nextui-org/react";
import { any } from "zod";
import { Hidden } from "@mui/material";
import { UserContext } from "@/contexts/UserContext";



// import ClientArea from "./ClientArea";


interface userProps {

    hidden?: string
    open?: number,
    id_usr?: any
    closBox?: () => void
    display?: string
}

export default function Edit(props: userProps) {

    const { getUserById, userinfo } = useContext(UserContext)
    const [action, setAction] = useState<any>();

    const [isVisible, setIsVisible] = useState(true);

    const toggleBox = () => {

        setIsVisible(!isVisible);
    }

    const [fName, setFname] = useState('');
    const [fMail, setFmail] = useState('');
    const [fPassword, setFpassword] = useState('');
    // 
    useEffect(() => {

        // console.log(userinfo)

        const  getAllUser = () => {

            if (!props.id_usr) {
                // console.log("id_props: " , props.id_usr)             
                 getUserById(props.id_usr)
                //  alert(userinfo)
                 console.log(userinfo)
                 return
            }
        }
        getAllUser()
    }, [])

    return (

        <div className="flex justify-center  items-center p-6" style={{ display: isVisible ? props.display : 'none' }}  >

            <form
                className="flex flex-col gap-3 w-2/3  mt-5 border-1 border-indigo-600 p-5 rounded-md">

                {/* header form   */}
                <div className="flex flex-col  h-19 bg-indigo-600">

                    <div className="text-white grid grid-cols-3 gap-6  pt-2">
                        <div className="col-span-2 items-end justify-end  flex" >
                            <PencilSquareIcon className="h-10 w-10" />
                            <p className="font-extrabold pl-1"> Editar </p>
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

                    {/*  Nome  */}
                    <label className="font-semibold text-indigo-600">Nome</label>
                    <input
                        name="nome_edit"
                        type="text"
                        value={userinfo?.nomeF}
                        //  onChange={(e)=>setFname(e.target.value)}
                        className="border border-indigo-600 shadow-sm rounded h-10"

                    />
                    {/*  email  */}

                    <label className="font-semibold text-indigo-600">E-mail</label>
                    <input
                        name="email_edit"
                        type="email"
                        value={userinfo?.emailF}
                        // onChange={(e)=>setFmail(e.target.value)}
                        className="border border-indigo-600 shadow-sm rounded h-10"
                    />
                    {/*  password  */}

                    <label htmlFor="password" className="font-semibold text-indigo-600">Password </label>
                    <input
                        name="password_edit"
                        type="password"
                        value={"hjfdjkdkdk"}
                        className=" border border-indigo-600 shadow-sm rounded h-10"

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