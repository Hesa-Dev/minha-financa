import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import SideBar from "./includes/SideBar";
import NavBar from "./includes/NavBar";
import Cards from "./includes/Cards"
import TableMovimentos from "./finance/TableM";
import Add from "./user/Add";
import {
    useState,
    useContext,
    useEffect,
    useRef,
    useLayoutEffect 
} from 'react';

import { AuthContext } from "@/contexts/AuthContext";
import Financa from "./finance/Financa";
import GestUser from "./user/GestUser";

interface ClientAreaProps {
    hide?: string
}

export default function ClientArea(props: ClientAreaProps) {

    const { signOut, user, reloadData } = useContext(AuthContext)
    const [openUser, setOpenUser] = useState<number>();
    const [openFinance, setOpenFinance] = useState<any>(1);

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
        // setTipo("debito")
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

            <div className="basis-[85%]">
                <NavBar boxUser={openUserBox} signOut={logOff} />

                {/* cards */}
                <div className="ml-8 mt-11">
                    <Cards />
                </div>

                {openUser ? 
                  
                ( user?.tipo==="admin" ?  <GestUser   utilizador={user?.tipo} /> :  <Add closBox={closeUser} /> )
                    : (
                        openFinance ? (<TableMovimentos userID={user?.id} />) :

                        ( user?.tipo==="admin" ? <GestUser  utilizador={user?.tipo}  /> :  <Add closBox={closeUser} /> )

                    )}
            </div>

        </div>
    )
}