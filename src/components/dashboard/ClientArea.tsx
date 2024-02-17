import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Cards from "./Cards"
import Table from "./Table";
import User from "./User";
import {
    useRef,
    useState
} from 'react';

interface ClientAreaProps {

    hide?: string
    // toggle:(tableDiv:string)
}

export default function ClientArea(props: ClientAreaProps) {

    const [open, setOpen] = useState<number>();

    function openBox() {

        setOpen(1)
        console.log("valor do open: ", open)
    }

    function closBox() {

        setOpen(undefined)
        console.log("janela fechado ..: ", open)
    }


    return (

        <div className="flex">

            {/* SIDEBAR */}
            <div className="basis-[15%]">
                <SideBar boxUser={openBox} />
            </div>

            <div className="basis-[85%] ">
                <NavBar boxUser={openBox} />

                {/* cards */}
                <div className="ml-8 mt-11">
                    <Cards />
                </div>

                {/* table  style={{ display: hideT ? "none" : "block" }} */}

                {open ? (
                    <User closBox={closBox} />

                ) : (

                    <div className="ml-8 mt-11 mr-5" >
                        <Table />
                    </div>
                )}
                {/* {open == 0 && <Table />} */}


                {/* Gestao de utilizador  */}
                {/* <div style={{ display: hidden ? "none" : "block" }}> */}

                {/* {open && <User />} */}
                {/* </div> */}
            </div>

        </div>
    )
}