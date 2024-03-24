import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import SideBar from "./includes/SideBar";
import NavBar from "./includes/NavBar";
import NavBar1 from "./includes/NavBar1";
import Cards from "./includes/Cards"
import TableMovimentos from "./finance/TableM";
import Add from "./user/Add";
import Edit from "./user/Edit";
import {
    useState,
    useContext,
    useEffect,
    useRef,
    useLayoutEffect,
    Children
} from 'react';

import { AuthContext } from "@/contexts/AuthContext";
import Financa from "./finance/Financa";
import GestUser from "./user/GestUser";

interface ClientAreaProps {
    hide?: string
}


export default function ClientArea(props: ClientAreaProps) {

    const { signOut, user, reloadData } = useContext(AuthContext)
    const [boxTblUser, setBoxTblUser] = useState<number>();
    const [boxTblM, setBoxTblM] = useState<any>(1);

    const [credito, setCredito] = useState<any>(null);
    const [debito, setDebito] = useState<any>(null);

    // USER 
    function openUserBox() {
        setBoxTblUser(1)
        setBoxTblM(undefined)
    }

    function closeUser() {
        setBoxTblUser(undefined)
        setBoxTblM(1)
    }

    function closeBxInOut() {

        setDebito(null)
        setCredito(null)
        setBoxTblM(1)
    }

    function boxCredito() {

        setCredito("credito")
        setDebito(null)
        setBoxTblUser(undefined)
        setBoxTblM(undefined)
    }

    function boxDebito() {

        setDebito("debito")
        setCredito(null)
        setBoxTblUser(undefined)
        setBoxTblM(undefined)
    }

    //  FINANCE
    function tblMovimentos() {
        setBoxTblM(1)
        setBoxTblUser(undefined)
        // setTipo("debito")
    }

    function logOff() {
        signOut()
    }

    return (

        <div className="flex">

            {/* SIDEBAR */}
            <div className="basis-[15%]">
                <SideBar
                    boxUser={openUserBox}
                    tblMovimentos={tblMovimentos}
                    boxCredito={boxCredito}
                    boxDebito={boxDebito}
                />
            </div>

            <div className="basis-[85%] ">
                <NavBar boxUser={openUserBox} signOut={logOff} />
                {/* <NavBar1 /> */}

                {/* cards */}
                <div className="ml-8 mt-11">
                    <Cards />
                </div>

                {boxTblUser ?

                    (user?.tipo === "admin" ? <GestUser utilizador={user?.tipo} /> : <Edit closBox={closeUser} id_usr={user?.id} />)
                    : (
                        boxTblM ? <TableMovimentos userID={user?.id} />
                            : credito ? <Financa tipo={credito} closBox={closeBxInOut}  userID={user?.id}/>
                                : debito ? <Financa tipo={debito} closBox={closeBxInOut} userID={user?.id} /> :
                                    (user?.tipo === "admin" ? <GestUser utilizador={user?.tipo} /> : 
                                        <Edit closBox={closeUser} id_usr={user?.id} />)

                    )}
            </div>

        </div>
    )
    // return{openUserBox, closeBxInOut}
}