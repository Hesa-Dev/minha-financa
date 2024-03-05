
import React, {
    useState,
    useContext,
    useEffect,
    useLayoutEffect
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
import Modal from 'react-modal';
// import ModalV2 from "../includes/Modalv2";
import ModalV2 from  "../includes/Modalv2";
import ModalView from "../includes/Modal";

import {
    // Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure
} from "@nextui-org/react";


interface credentials {
    utilizadores?: any
}

Modal.setAppElement('#__next');

export default function GestUser(props: credentials) {

    const { getUsers, users } = useContext(UserContext)

    const [user, setUser] = useState<any>(null);
    const [action, setAction] = useState<any>();
    const [userById, setUserById] = useState<any>([]);

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    function modalOpen(id : string ){
        // alert("modal abrindo...")
        console.log("id_user : " , id)
        setUserById(id)
        setModalIsOpen(true)
    }

    function modalClose(){
        // alert("modal fechando ..." )
        setModalIsOpen(false)
    }


    const closeBox = () => {

        setAction(undefined)
    }

    const handleAdd = () => {

        setAction("add")
        alert(action)
    }


    const handleEdit = async (id: string) => {

        if (id) {
            setAction("edit")
            // console.log("userInfo: ", userinfo?)
            setUserById(id)
        }
    }

    const handleDelet = async (id:string) => {

        setAction("delet")
        setUserById(id)
    }

    useEffect(() => {

        getUsers()

        if (users) {
            setUser(users)
            // console.log("todos user: ", users)
        }

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
                    <button   onClick={()=>modalOpen(row.id)} className="flex justify-center items-center bg-red-500 w-16 h-8 rounded-md text-white">
                        <TrashIcon className=" w-11 h-7" />
                    </button>
                    <button onClick={() => handleEdit(row.id  )} className="bg-warning-500 flex justify-center items-center  w-16 h-8 rounded-md text-white">
                        <PencilIcon className=" w-11 h-7" />
                    </button>
                    <button onClick={() => handleAdd} className=" flex justify-center align-middle items-center bg-success-300 w-16 h-8 rounded-md text-white">
                        <PlusIcon className=" w-11 h-7" />
                    </button>
                </div>
            ),


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

            {action === "edit" ? (<Edit display={"block"} closBox={closeBox} id_usr={userById} />)
                : (action === "add" && (<Add closBox={closeBox} />)

                )}

                {/* MODAL  */}

                {modalIsOpen && (

                 <ModalV2  
                 isOpen={modalIsOpen} 
                 onRequestClose={modalClose}
                 id={userById}
                 />

                
                )  }
              

        </React.Fragment>


    )


}