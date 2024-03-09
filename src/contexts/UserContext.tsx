
import React, { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";
import { error } from "console";

type userData = {

    add: (userinfo:userInfo) => void;
    delet: (id: string) => void
    users?: users;
}

type users = {
    users: any
}

interface userInfo {

    name: any,
    email: any,
    password: any
}

type userProviderProps = {
    children: ReactNode
}

export const UserContext = createContext({} as userData)

export function UserProvider({ children }: userProviderProps) {

    //   alert("inside provider user ...")
    const [users, setUsers] = useState<users>()
    const [userinfo, setUserInfo] = useState<userInfo>()



    async function add({name, email , password } : userInfo) {

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

    

    return (

        <UserContext.Provider value={{ add ,  delet, users }}>
            {children}
        </UserContext.Provider>

    )

}




