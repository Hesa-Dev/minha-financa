
import React, { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "@/services/apiClient";
import { any } from "zod";
import { json } from "stream/consumers";
import { userAPI } from "@/services/api";

type userData = {

    add: () => void;
    edit: () => void
    delet: () => void
    getUserById: (id: string) => Promise<void>
    getAllUsers: () => Promise<void>
    users?: users;
    userinfo?: userInfo
}

type users = {
    users: any
}

type userInfo = {

    nomeF: string,
    emailF: string,
    passwordF: string
}


type userProviderProps = {
    children: ReactNode
}

export const UserContext = createContext({} as userData)

export function UserProvider({ children }: userProviderProps) {

    //   alert("inside provider user ...")
    const [users, setUsers] = useState<users>()
    const [userinfo, setUserInfo] = useState<userInfo>()

    async function getAllUsers() {

        // console.log("dentro do getAllusers")

        api.get('/user/all').then(response => {

            if (response.status === 200) {
                const resp = response.data

                setUsers(resp)
                console.log("allUsers", resp)
            }

        }).catch((error) => {
            console.log("error:. ", error)

        })
    }

    // useEffect(() => {



    // }, [])


    async function add() {

    }

    async function edit() {

    }

    async function delet() {

    }

    function resetUserInfo(userinfo: userInfo) {

        if (userinfo) {
            const nomeF = ""
            const emailF = ""
            const passwordF = ""

            setUserInfo({
                nomeF,
                emailF,
                passwordF
            })
        }

    }

    async function getUserById(id: string) {

        // console.log("estou dentro |   getUserById  id: ", id)
        try {

            const response = await api.get('/userinfo', {
                params: {
                    id: id
                }
            }).then(function (response) {

                const { nomeF, emailF, passwordF } = response.data;
                console.log("response_data : ", response.data)

                // resetUserInfo({ nomeF, emailF, passwordF })
                setUserInfo({
                    nomeF,
                    emailF,
                    passwordF
                })

                // console.log("inside_provider" ,id)
            })

        } catch (error) {
            console.log("erro na busca ", error)
        }

    }

    return (

        <UserContext.Provider value={{ add, edit, getAllUsers, delet, users, getUserById, userinfo }}>
            {children}
        </UserContext.Provider>

    )

}

export default function userSetting() {

    // alert("dentro do userSetting...")

  const [allUser, setAlluser] = useState<any>(null)

   async function getUserAll(){

    api.get('/user/all').then(function (response)  {

        console.log("dentro do getAllusers")

        if (response) {
            // const {resp} = response.data

            setAlluser(response.data)
            localStorage.setItem("users",JSON.stringify(response.data))
            console.log("allUsers", response.data)
        }

    }).catch((error) => {
        console.log("error:. ", error)

    })
   }

    // useEffect(() => {

    //     console.log("dentro do getAllusers")

    //     api.get('/user/all').then(response => {

    //         if (response.status === 200) {
    //             const resp = response.data

    //             setAlluser(resp)
    //             console.log("allUsers", resp)
    //         }

    //     }).catch((error) => {
    //         console.log("error:. ", error)

    //     })
    // }, [])

    async function getAll() {


    }

    return { allUser, getAll , getUserAll }

}

