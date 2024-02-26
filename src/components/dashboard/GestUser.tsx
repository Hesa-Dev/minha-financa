
import React, {
    useState,
    useContext,
    useEffect
} from "react"
import DataTable, { defaultThemes } from 'react-data-table-component';
import { UserContext, getValues, } from "@/contexts/UserContext";

import {
    TrashIcon,
    PencilIcon,
    PlusIcon
} from "@heroicons/react/20/solid";

interface credentials {
    users?: any
}


export default function GestUser( parametros: credentials) {

    const { getUsers, allD } = useContext(UserContext)

    const columns = [
        {
            name: "ID",
            selector: (row: any) => row.id,
            sortable: true,
        },
        {
            name: "Nome",
            selector: (row: any) => row.name,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row: any) => row.email,
            sortable: true,
        },
        {
            name: "Accão",
            // selector: (row: any) => row.accao,
            cell: (row: any) => (
                <div className="flex  gap-3 p-2">
                    <button className="flex justify-center items-center bg-red-500 w-16 h-8 rounded-md text-white">
                        <TrashIcon className=" w-11 h-7" />
                    </button>
                    <button className="bg-warning-500 flex justify-center items-center  w-16 h-8 rounded-md text-white">

                        <PencilIcon className=" w-11 h-7" />
                    </button>
                    <button className=" flex justify-center align-middle items-center bg-success-300 w-16 h-8 rounded-md text-white">
                        <PlusIcon className=" w-11 h-7" />
                    </button>
                </div>
            ),


        }
    ]

    const data = [
        {
            id: 1,
            nome: 'Honorio Silva ',
            email: 'hs@hesasoft.com',
            tipo: 'admin',
            accao: 'action'
        }
    ]

    const styles = {

        headCells: {
            style: {
                color: "black",
                fontSize: '16px',
                fontWeight: 'bold'
            }
        },
    }

    const [users, setUsers] = useState<any>([]);
    const [filter, setFilter] = useState<any>([]);
    const [search, setSearch] = useState<any>([]);



    async function getUser() {

        if (parametros.users) {
            setUsers(parametros.users)
            console.log(parametros.users) 
        }

       

    }


    useEffect(() => {

        // const getUser = async ()=>{

        //     const req = await fetch('http://localhost:5555/user/all')
        //     const res = await req.json()

        //     setUsers(res)

        //     // alert("user.." + res)
        //     console.log("user.." ,   res)


        // }
        getUser()
        

    }, [])



    return (

        <React.Fragment>

            <DataTable
                columns={columns}
                data={users}
                pagination={true}
                paginationPerPage={5}
                selectableRows
                selectableRowsNoSelectAll
                fixedHeader
            // customStyles={styles}
            />

        </React.Fragment>


    )


}