import {
    ChevronRightIcon,
    PlusCircleIcon,
    MinusCircleIcon,
    ChartBarIcon,
    UserIcon
} from "@heroicons/react/20/solid";
import {
    useEffect,
    useRef,
    useState,
    useContext
} from 'react';
import { AuthContext } from "@/contexts/AuthContext";


interface sideBarProps {
    hidden?: string
    open?: number,
    boxUser?:() =>void
    boxFinance?:()=>void
}
export default function SideBar(props: sideBarProps) {

    const { signOut, user } = useContext(AuthContext)
    
    return (

        <div className="h-screen  bg-indigo-600 relative">

            <div className="flex flex-col   text-white   justify-center align-middle items-center">

                <div className="border-b-2 mt-6 pb-11 pt-6 border-white  font-extrabold">
                    MINHAS FINANÇAS
                </div>

                <div onClick={props.boxFinance} className="pb-9 pt-6 font-semibold flex justify-self-end items-center cursor-pointer  hover:text-black ">
                    <PlusCircleIcon className="h-8 w-8 mr-4" aria-hidden="true" />
                    <span className="me-5"> Entradas</span>
                    <ChevronRightIcon className="h-8 w-8 " aria-hidden="true" />
                </div>

                <div  className="pb-9 pt-6 font-semibold flex justify-self-end items-center cursor-pointer hover:text-black ">
                    <MinusCircleIcon className="h-8 w-8  mr-4" aria-hidden="true" />
                    <span className="me-5"> Saidas</span>
                    <ChevronRightIcon className="h-8 w-8 " aria-hidden="true" />
                </div>
                <div className="pb-9 pt-6 font-semibold flex justify-self-end items-center cursor-pointer hover:text-black ">
                    <ChartBarIcon className="h-8 w-8  mr-4" aria-hidden="true" />
                    <span className="me-5"> Movimentos</span>
                    <ChevronRightIcon className="h-8 w-8 " aria-hidden="true" />
                </div>

                <div  onClick={props.boxUser}  className="font-semibold flex justify-self-end items-center cursor-pointer hover:text-black   border-t-2 pt-7 border-white">
                    <UserIcon className="h-8 w-8  mr-4" aria-hidden="true" />
                    <span className="me-5"> {user?.name}</span>
                    <ChevronRightIcon className="h-8 w-8 " aria-hidden="true" />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0  h-8 bg-black text-white">
                <div className="flex  flex-col items-center italic font-semibold">
                    <legend>deginer by hesasoft</legend> 
                </div>
            </div>
        </div>

    )

}