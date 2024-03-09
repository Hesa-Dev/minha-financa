
import React, { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";
import { error } from "console";

type userData = {

    add: (userinfo: userInfo) => void;
    delet: (id: string) => void
    users?: users;
    updateUser: (userInfo:userInfo)=>Promise<any>
}

type users = {
    users: any
}

interface userInfo {

    id?:any
    name: any,
    email: any,
    password: any
    tipo?:any
}

type userProviderProps = {
    children: ReactNode
}

export const UserContext = createContext({} as userData)

export function UserProvider({ children }: userProviderProps) {

    //   alert("inside provider user ...")
    const [users, setUsers] = useState<users>()

    async function add({ name, email, password }: userInfo) {

        const response = await api.post('/user/add', {
            name: name,
            email: email,
            password: password

        }).then(function (resp) {

            toast.success("Usuario adicionado com Sucesso! ")

        }).catch(function (error) {

            console.log(error.data)
            toast.error("Erro ao adicionar utilizador  ! ")
        })

    }


    async function delet(id: string) {

        if (id) {

            const response = await api.post('/user/delete', {
                id: id
            }).then(function (resp) {

                console.log(resp.data)
                toast.success("Usuario Excluido! ")

            }).catch(function (error) {

                console.log(error.data)
                toast.error("Erro ao Excluir ! ")
            })

        }

    }


    async function updateUser({id,  name, email, password, tipo }: userInfo) {

        if (name && email && password) {

            const response = await api.post('/user/update', {
                id:id,
                name: name,
                email: email,
                password: password,
                tipo
            }).then(function (res) {

                // console.log( "dados:edit " , res.data)

            }).catch(function (error) {

                console.log(error)
            })

        }


    }

    return (

        <UserContext.Provider value={{ add, delet, users , updateUser }}>
            {children}
        </UserContext.Provider>

    )

}




