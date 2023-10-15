import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";

export default function Login() {

    return (
        <div className="flex justify-center h-screen items-center">


            <form action="" className="flex flex-col gap-4 w-full max-w-sm">

                {/* logo da empresa  */}
                <div className="flex gap justify-center mt-3 items-center ms-3 mb-2">
                    <Link href="/">
                        <IconBrandPaypal color="#AF7AC5" size={75} />
                    </Link>
                </div>

                {/* inputs  */}
                <div className=" flex flex-col gap-2">
                    <label htmlFor="email" className="font-semibold text-violet-800">E-mail</label>
                    <input
                        name="email"
                        type="email"

                        className="border border-violet-400 shadow-sm rounded h-10"
                    />

                    <label htmlFor="password" className="font-semibold text-violet-800">Password </label>
                    <input
                        name="password"
                        type="password"
                        className=" border border-violet-400 shadow-sm rounded h-10"
                    />

                </div>

                    <button
                        type="submit"
                        className="
                        rounded font-semibold 
                        text-white bg-violet-500 h-10
                         hover:bg-white 
                         hover:border border-violet-400
                         hover:text-violet-600"
                    >
                        Login
                    </button>

            </form>





        </div>
    )
}