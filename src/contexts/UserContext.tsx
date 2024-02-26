
import React, { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "@/services/apiClient";
import { any } from "zod";
import { json } from "stream/consumers";
import { userAPI } from "@/services/api";

type userData = {
    // data?: dataProps;
    // dataConst: any;
    getUsers(): Promise<any>;
    // getValues()?:string
    allD?: alluser;

}

type alluser = {
    allD: any
}


type userProviderProps = {
    children: ReactNode
}

export const UserContext = createContext({} as userData)


export async function getValues() {
    
    api.get('/user/all').then(response => {

        if (response.status === 200) {
            const resp = response.data
            console.log(resp)
        }

    }).catch((error) => {
        console.log("error:. ", error)
    })
}

export function UserProvider({ children }: userProviderProps) {

    // alert("provider inside ...")

    const [allD, setallD] = useState<alluser>()
    // const [teste, setTeste] = useState<userData>()

    useEffect(() => {

        api.get('/user/all').then(response => {

            if (response.status === 200) {
                const resp = response.data

                setallD(resp)
                console.log(resp)
            }

        }).catch((error) => {
            console.log("error:. ", error)
        })

    }, [])


    async function getUsers() {



    }

    return (

        <UserContext.Provider value={{ getUsers, allD }}>
            {children}
        </UserContext.Provider>

    )

}

