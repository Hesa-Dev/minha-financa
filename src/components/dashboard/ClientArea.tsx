import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Cards from "./Cards"
import Table from "./Table";
import User from "./User";

export default function ClientArea() {

    return (

        <div className="flex">

            {/* SIDEBAR */}
            <div className="basis-[15%] ">
                <SideBar />
            </div>

            <div className="basis-[85%] ">
                <NavBar />

                 {/* cards */}
                <div className="ml-8 mt-11">
                    <Cards/>
                </div>

                {/* table */}
                <div className="ml-8 mt-11 mr-5">
                    <Table/>
                </div>

                {/* Gestao de utilizador  */}
                <div>
                     <User/>
                </div>
            </div>

        </div>
    )
}