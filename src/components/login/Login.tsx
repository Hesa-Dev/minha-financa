import { IconBrandPaypal } from "@tabler/icons-react";
import { useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";

export default function Login() {

    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    async function testLogin(e: any) {

        if (!email || !password) {

            e.preventDefault();
            toast.warning("campos obrigatorio! ")
           return  
        }
        e.preventDefault();
        let data = {
            email,
            password
        }
        await signIn(data)
    }

    return (
        <div className="flex justify-center h-screen items-center">

            <form action="" className="flex flex-col gap-4 w-full max-w-sm" onSubmit={testLogin}>

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
                        value={email}
                        className="border border-violet-400 shadow-sm rounded h-10"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" className="font-semibold text-violet-800">Password </label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        className=" border border-violet-400 shadow-sm rounded h-10"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                        htmlFor="password"
                        className="font-semibold text-violet-800 text-center cursor-pointer"
                    >
                        <Link href="/login/registo">
                            Criar Conta
                        </Link>
                    </label>
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