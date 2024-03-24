import {
    Fragment,
    useState,
    useContext
} from 'react'
import { IconBrandPaypal } from "@tabler/icons-react";

import {
    ArrowRightCircleIcon,
    UsersIcon,
    UserIcon,
}
from '@heroicons/react/24/solid'
import {
    BellIcon,
    XMarkIcon,
}
from '@heroicons/react/24/outline'
import { Tooltip, user } from "@nextui-org/react";
import { AuthContext } from "@/contexts/AuthContext";

interface navProps {

    hidden?: string
    open?: number,
    boxUser?: () => void
    signOut?: () => void

}


export default function NavBar1(props: navProps) {

    const { user } = useContext(AuthContext)
    return (

        <nav className="flex  fixed border  border-b-indigo-600 top-1 left-52 right-3">

            <div className="flex flex-row  text-indigo-600 gap-4 items-center sm:gap-2 cursor-pointer ">

                <div className='basis-1/2 flex items-center'>
                    <IconBrandPaypal className='text-indigo-600' size={35} />
                </div>
                <div className='font-extrabold basis-1/4  ml-9 md:ml-4  '>
                    Dashboard
                </div>
                <div className='font-extrabold '>
                    Team
                </div>

                <div className='font-extrabold '>
                    projects
                </div>

                <div className='font-extrabold '>
                    Calendar
                </div>
            </div>

            {/*  funcçoes user | sair  */}

            <div className="flex flex-row  gap-3 md:w-full xl:w-full  justify-end ">
                <div>
                    <button
                        type="button"
                        className="relative rounded-full bg-indigo-600 p-1 me-3.5 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6 " aria-hidden="true" />
                    </button>
                </div>

                <div className='flex justify-center items-center text-white' >
                    <Tooltip content="Gestão de Utilizador">
                        <button onClick={props.boxUser} className="flex justify-center items-center h-8 w-8 rounded-full bg-indigo-600 text-sm">
                            {user?.tipo === "admin" ? (<UsersIcon className=" h-5 w-5   items-center" aria-hidden="true" />)
                                : (<UserIcon className=" h-6 w-6 " aria-hidden="true" />)
                            }
                        </button>
                    </Tooltip>
                </div>

                <div className=' text-white mr-1'>
                    <Tooltip content="Logout">
                        <button onClick={props.signOut} className=" flex p-1 items-center   h-8 w-8 rounded-full bg-indigo-600 text-sm focus:outline-none">
                            <ArrowRightCircleIcon className=" h-7 w-7 " aria-hidden="true" />
                        </button>
                    </Tooltip>
                </div>
            </div>


        </nav>
    )

}