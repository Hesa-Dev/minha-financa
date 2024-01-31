import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function testLogin(e: any){

        e.preventDefault();
        // event.preventDefault()
        
        console.log(email)
        console.log(password)
    }


    /*const loginFormSchema = z.object({
        email: z.string().
            email('Formato ínvalido ! '),
        password: z.string().
            min(8, 'Mínimo de Caracter aceite 8!')
    })
    type CreateLoginFormData = z.infer<typeof loginFormSchema>
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm<CreateLoginFormData>({

            resolver: zodResolver(loginFormSchema),
        })*/


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
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    {/* {  errors.email && <span>{errors.email.message}</span>} */}

                    <label htmlFor="password" className="font-semibold text-violet-800">Password </label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        className=" border border-violet-400 shadow-sm rounded h-10"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                   {/* { errors.password && <span>{errors.password.message}} */}
                   {/* </span> */}

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