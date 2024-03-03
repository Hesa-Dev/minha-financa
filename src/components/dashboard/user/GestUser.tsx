
import React, {
    useState,
    useContext,
    useEffect
} from "react"
import DataTable, { defaultThemes } from 'react-data-table-component';
// import { UserContext, getValues, } from "@/contexts/UserContext";


import {
    TrashIcon,
    PencilIcon,
    PlusIcon
} from "@heroicons/react/20/solid";
import Edit from "./Edit";
import Add from "./Add";
import { UserContext } from "@/contexts/UserContext";
import userSetting from "@/contexts/UserContext";


interface credentials {
    utilizadores?: any
}


export default function GestUser(props: credentials) {


    // const { add, users } = useContext(UserContext) 
    const { users, getAllUsers, } = useContext(UserContext)

    const { allUser } = userSetting()


    const [user, setUser] = useState<any>(null);
    const [action, setAction] = useState<any>();
    const [id_user, setId_user] = useState<String>();


    const closeBox = () => {

        setAction(undefined)
    }




    // getAlls()
    const handleAdd = () => {

        setAction("add")
        alert(action)
    }


    const handleEdit = (id: any) => {

        if (id) {
            setAction("edit")
            setId_user(id)
            console.log("id: ", id)
            // alert("edit")F 
        }

    }

    const handleDelet = () => {

        setAction("delet")
    }

    useEffect(() => {

        // alert(props.utilizadores)

        if (user==null) {

            setUser(localStorage.getItem("users"))
            console.log("estou aqui gestUser: ", localStorage.getItem("users"))
        }
        // const getAlls = async () => {

        //     getAllUsers()

        //     if (allUser) {

        //        setUser(allUser)
        //         console.log("estou aqui gestUser: " , user)
        //         return
        //     }
        //     return

        // }
        // getAlls()
    }, [])

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
                    <button onClick={handleDelet} className="flex justify-center items-center bg-red-500 w-16 h-8 rounded-md text-white">
                        <TrashIcon className=" w-11 h-7" />
                    </button>
                    <button onClick={() => handleEdit(row.id)} className="bg-warning-500 flex justify-center items-center  w-16 h-8 rounded-md text-white">
                        <PencilIcon className=" w-11 h-7" />
                    </button>
                    <button onClick={() => handleAdd} className=" flex justify-center align-middle items-center bg-success-300 w-16 h-8 rounded-md text-white">
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

    return (

        <React.Fragment>
            {user ? (
                <DataTable
                    columns={columns}
                    data={user}
                    pagination={true}
                    paginationPerPage={5}
                    selectableRows
                    selectableRowsNoSelectAll
                    fixedHeader
                    customStyles={styles}
                />

            ) : (

                 <p>sem dados ...</p>
           )
            }


            {/*  action forms  */}

            {action === "edit" ? (<Edit display="block" closBox={closeBox} id_usr={id_user} />)
                : (action === "add" && (<Add closBox={closeBox} />)

                )}

        </React.Fragment>


    )


}