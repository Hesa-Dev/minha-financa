import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";


export default function Registo() {

    // Hook
    // const [dataRegister, setDataRegister] = useState({
    //     email: '',
    //     password: '',
    //     nome: ''
    // })

    const {signUp } = useContext(AuthContext)

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function addField(e:any) {

        e.preventDefault();
        if (!email || !password || !nome ) {

            toast.warning("campos obrigatorio! ")
            // return alert("campos obrigatorio")
            
        }

        let data = {
            nome,
            email,
            password
        }

      await signUp(data)
    }

    // const handleRegistoForm = (event: any) => {
    //     event.preventDefault()
    //     console.log("estou no form registo ... ")
    //     console.log(dataRegister.email, dataRegister.nome, dataRegister.password)
    // }

    // const registerForm = (event: any, key: any) => {
    //     event.preventDefault()
    //     setDataRegister({ ...dataRegister, [key]: event.target.value })
    // }

    return (
        <div className="flex justify-center h-screen items-center">

            <form
                onSubmit={addField}

                className="flex flex-col gap-4 w-full max-w-sm">

                {/* logo da empresa  */}
                <div className="flex gap justify-center mt-3 items-center ms-3 mb-2">
                    <Link href="/">
                        <IconBrandPaypal color="#AF7AC5" size={75} />
                    </Link>
                </div>

                {/* inputs  */}
                <div className=" flex flex-col gap-2">

                    {/*  Nome  */}
                    <label  className="font-semibold text-violet-800">Nome</label>
                    <input
                        name="nome"
                        type="text"
                        value={nome}
                        className="border border-violet-400 shadow-sm rounded h-10"
                        onChange={(e) => setNome(e.target.value)}

                        // onChange={
                        //     // (e) => setDataRegister({ ...dataRegister, [name]: event.target.value })
                        //     //  setDataRegister({ ...dataRegister, [key]: event.target.value })
                        // }
                    />
                    {/*  email  */}

                    <label  className="font-semibold text-violet-800">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        value={email}
                        className="border border-violet-400 shadow-sm rounded h-10"
                        onChange={(e) => setEmail(e.target.value)}
                        // onChange={(e) => setDataRegister(email, e.target.value)}
                    />
                    {/*  password  */}

                    <label htmlFor="password" className="font-semibold text-violet-800">Password </label>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        className=" border border-violet-400 shadow-sm rounded h-10"
                        onChange={(e) => setPassword(e.target.value)}
                        // onChange={() => registerForm(event, 'password')}
                    />

                    <label
                        htmlFor="password"
                        className="font-semibold text-violet-800 text-center cursor-pointer"
                    >
                        <Link href="/login/login">
                           Login
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
                    Salvar
                </button>

            </form>

        </div>
    )
}