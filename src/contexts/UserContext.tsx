
import React, { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";
import { error } from "console";

type userData = {

    add: (userinfo:userInfo) => void;
    edit: () => void
    delet: (id: string) => void
    getUserById: (id: string) => Promise<any>
    // getAllUsers: () => Promise<void>
    getUsers: () => Promise<any>
    users?: users;
    userinfo?: userInfo
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

    async function getUsers() {

        api.get('/user/all').

            then(response => {
                // const resp = response.data
                setUsers(response.data)
                // console.log("get_All_Users : ", users)
            }).

            catch((error) => {
                console.log("error:. ", error)
            })

        return api
    }


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

    async function edit() {

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

    async function getUserById(id: string) {

        // setUserInfo('')


        if (id) {

            try {

                const response = await api.post('/user/info', {
                    id: id
                }).then(function (resp) {

                    setUserInfo(resp.data)

                    // console.log("estou dentro |   getUserById  id: ", userinfo?.name)
                })

            } catch (error) {

                console.log("erro na busca ", error)
            }

            // return userinfo
        }

    }

    return (

        <UserContext.Provider value={{ add, edit, getUsers, delet, users, getUserById, userinfo }}>
            {children}
        </UserContext.Provider>

    )

}




