import { IconArcheryArrow, IconBrandPaypal, IconLogout } from "@tabler/icons-react";
import Image from "next/image";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Cards from "./Cards"

export default function ClientArea() {

    return (

        <div className="flex">

            {/* SIDEBAR */}
            <div className="basis-[15%] ">
                <SideBar />
            </div>

            <div className="basis-[85%] ">
                <NavBar />

                <div className="ml-8 mt-11">
                    {/* cards ... */}
                    <Cards/>
                </div>
            </div>



        </div>


    )
}