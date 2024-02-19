import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Cards from "./Cards"
import Table from "./Table";
import User from "./User";
import {
    useState,
    useContext
} from 'react';

import { AuthContext } from "@/contexts/AuthContext";
import Financa from "./Financa";

interface ClientAreaProps {
    hide?: string
}

export default function ClientArea(props: ClientAreaProps) {

    const { signOut, user } = useContext(AuthContext)
    const [openUser, setOpenUser] = useState<number>();
    const [openFinance, setOpenFinance] = useState<number>();
    // const [openUser, setOpenUser] = useState<number>();


    // USER 
    function openUserBox() {
        setOpenUser(1)
        setOpenFinance(undefined)
    }
    function closeUser() {
        setOpenUser(undefined)
    }

    //  FINANCE
    function openFinanceBox() {
        setOpenFinance(1)
        setOpenUser(undefined)
    }
    function closeFinanceBox() {
        setOpenFinance(undefined)
    }


    function logOff() {
        signOut()
    }



    return (

        <div className="flex">

            {/* SIDEBAR */}
            <div className="basis-[15%]">
                <SideBar boxUser={openUserBox} boxFinance={openFinanceBox} />
            </div>

            <div className="basis-[85%] ">
                <NavBar boxUser={openUserBox} signOut={logOff} />

                {/* cards */}
                <div className="ml-8 mt-11">
                    <Cards />
                </div>

                {openUser ? (<User closBox={closeUser} /> ) 
               : (
                    openFinance?(<Financa closBox={closeFinanceBox} /> ):( 

                        <div className="ml-8 mt-11 mr-5" >
                        {/* <Table /> */}
                        div vazia
                    </div>

                    )
                    
                )}
               

            </div>

        </div>
    )
}