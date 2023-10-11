import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";

export default function Login() {

    return (
        <div className="flex justify-center">


            <div className="border border-violet-500 rounded-md w-2/3 flex justify-center ">
                área de autenticação (login)

                <div className="flex gap justify-center items-center ms-3 mb-2">
                    <Link href="/" >
                        <IconBrandPaypal color="#AF7AC5" size={75} />
                    </Link>
                </div>
            </div>

        </div>
    )
}