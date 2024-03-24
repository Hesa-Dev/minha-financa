import {
    Fragment,
    useState,
    useContext
} from 'react'
import { IconBrandPaypal } from "@tabler/icons-react";

export default function NavBar1() {


    return (

        <nav className="flex w-full m:flex  fixed border  border-indigo-600 top-0 left-52">

            <div className="flex  flex-row  justify-center items-center ms-3 mb-2 text-indigo-600 cursor-pointer">
                <div>
                    <IconBrandPaypal className='text-indigo-600 ' />
                </div>
                <div className='font-extrabold'>
                    Dashboard
                </div>
                <div className='font-extrabold'>
                    Team
                </div>

                <div className='font-extrabold'>
                    projects
                </div>

                <div className='font-extrabold'>
                    Calendar
                </div>
            </div>

            <div className="flex flex-row  justify-end items-center">

                <div>
                    sino
                </div>
                <div>
                    uitlizadors
                </div>
                <div>
                    sair
                </div>
            </div>
        </nav>
    )

}