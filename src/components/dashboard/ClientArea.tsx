import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import SideBar from "./includes/SideBar";
import NavBar from "./includes/NavBar";
import Cards from "./includes/Cards"
import Table from "./finance/Table";
import Add from "./user/Add";
import {
    useState,
    useContext,
    useEffect,
    useRef
} from 'react';

import { AuthContext } from "@/contexts/AuthContext";
import Financa from "./finance/Financa";
import GestUser from "./user/GestUser";
import userSetting from "@/contexts/UserContext";

interface ClientAreaProps {
    hide?: string
}

export default function ClientArea(props: ClientAreaProps) {

    const { signOut, user } = useContext(AuthContext)
    const { allUser, getUserAll } = userSetting()

    const [openUser, setOpenUser] = useState<number>();
    const [openFinance, setOpenFinance] = useState<number>();
    const [tipo, setTipo] = useState('');
    const [data, setData] = useState<any>(null);
    

    useEffect(() => {

        const todosUser = () => {

            if (data===null) {

                getUserAll()
                  setData(localStorage.getItem("users"))
            }
        }

        todosUser()

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

                {openUser ? (<Add closBox={closeUser} />)
                    : (
                        openFinance ? (<Financa closBox={closeFinanceBox} tipo={tipo} userID={user?.id} />) : (

                            <div className="w-full p-4" >
                                <GestUser utilizadores={data && (data)} />
                            </div>

                        )

                    )}
            </div>

        </div>
    )
}