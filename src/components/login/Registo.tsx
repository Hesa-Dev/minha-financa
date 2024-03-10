import { IconBrandPaypal } from "@tabler/icons-react";
import Link from "next/link";
import {
    useState,
    useContext,
    useRef
} from 'react';
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";


export default function Registo() {

    const { signUp, response, user } = useContext(AuthContext)

    // const [nome, setNome] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')


    const [formValues, setFormValues] = useState({
        nome: "",
        email: "",
        password: "",
        tipo: "normal"
    });


    const formRef = useRef(null);

    async function addField(e: any) {

        e.preventDefault();
        if (!formValues.nome || !formValues.email || !formValues.password) {

            toast.warning("campos obrigatorio! ")
            // return alert("campos obrigatorio")
            return
        }

        console.log("dados_form: ", formValues)

        await signUp({ ...formValues })
        toast.success("Usuario adicionado com Sucesso! ")

        setFormValues({
            nome: "",
            email: "",
            password: "",
            tipo:""
        });

        // }
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
                className="flex flex-col gap-4 w-full max-w-sm"
                ref={formRef}
            >

                {/* logo da empresa  */}
                <div className="flex gap justify-center mt-3 items-center ms-3 mb-2">
                    <Link href="/">
                        <IconBrandPaypal color="#AF7AC5" size={75} />
                    </Link>
                </div>

                {/* inputs  */}
                <div className=" flex flex-col gap-2">

                    {/*  Nome  */}
                    <label className="font-semibold text-violet-800">Nome</label>
                    <input
                        name="nome"
                        type="text"
                        value={formValues.nome}
                        className="border border-violet-400 shadow-sm rounded h-10"
                        // onChange={(e) => setNome(e.target.value)}
                        onChange={(e) =>
                            setFormValues({ ...formValues, nome: e.target.value })
                        }
                    />
                    {/*  email  */}

                    <label className="font-semibold text-violet-800">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        value={formValues.email}
                        className="border border-violet-400 shadow-sm rounded h-10"
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={(e) =>
                            setFormValues({ ...formValues, email: e.target.value })
                        }
                    // onChange={(e) => setDataRegister(email, e.target.value)}
                    />
                    {/*  password  */}

                    <label htmlFor="password" className="font-semibold text-violet-800">Password </label>
                    <input
                        name="password"
                        type="password"
                        value={formValues.password}
                        className=" border border-violet-400 shadow-sm rounded h-10"
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={(e) =>
                            setFormValues({ ...formValues, password: e.target.value })
                        }
                    // onChange={() => registerForm(event, 'password')}
                    />

                    <label
                        htmlFor="password"
                        className="font-semibold text-violet-800 text-center cursor-pointer"
                    >
                        <Link href="/login/">
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