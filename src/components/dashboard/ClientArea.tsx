import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Cards from "./Cards"
import Table from "./Table";
import User from "./User";
import {
    useState,
    useContext,
    useEffect
} from 'react';

import { AuthContext } from "@/contexts/AuthContext";
import Financa from "./Financa";
import GestUser from "./GestUser";
import { UserContext, getValues, } from "@/contexts/UserContext";

interface ClientAreaProps {
    hide?: string
}

export default function ClientArea(props: ClientAreaProps) {

    const { signOut, user } = useContext(AuthContext)


    const { getUsers, allD } = useContext(UserContext)
    const [prov, setProv] = useState();

    const [openUser, setOpenUser] = useState<number>();
    const [openFinance, setOpenFinance] = useState<number>();
    const [tipo, setTipo] = useState('');
    // const [openUser, setOpenUser] = useState<number>();


    useEffect(() => {

       

    }, [])


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
        setTipo("debito")

        // return tipo
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

                {openUser ? (<User closBox={closeUser} />)
                    : (
                        openFinance ? (<Financa closBox={closeFinanceBox} tipo={tipo} userID={user?.id} />) : (

                            <div className="w-full p-4" >

                                <GestUser users={allD} />
                            </div>

                        )

                    )}


            </div>

        </div>
    )
}