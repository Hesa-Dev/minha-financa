
import React, {
    useState,
    useContext,
    useEffect,
    useLayoutEffect
} from "react"
import DataTable, { defaultThemes } from 'react-data-table-component';
import { api } from "@/services/apiClient";
import {
    TrashIcon,
    PencilIcon,
    PlusIcon
} from "@heroicons/react/20/solid";
import Edit from "./Edit";
import Add from "./Add";
import { UserContext } from "@/contexts/UserContext";
import Modal from 'react-modal';
import Modalv2 from "../includes/Modal";

interface credentials {
    utilizadores?: any
}

Modal.setAppElement('#__next');

export default function GestUser(props: credentials) {

    const { users, delet } = useContext(UserContext)

    const [user, setUser] = useState<any>(null);
    const [action, setAction] = useState<any>();
    const [id, setId] = useState<any>('');

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    function modalOpen(id: string) {
        setId(id)
        setModalIsOpen(true)
    }
    function modalClose() {
        setModalIsOpen(false)
    }
    async function deletUser() {
        await delet(id)
        modalClose()
    }
    function closeBox() {
        setAction(undefined)
        setId('')
    }
    function handleAdd() {
        setAction("add")
        alert(action)
    }
    function handleEdit(id: string) {
        setAction("edit")

        if (id) {
            setId(id)
        }
    }

    const handleDelet = async (id: string) => {

        setAction("delet")
        setId(id)
    }

    useEffect(() => {

        api.get('/user/all').

            then(response => {
                // const resp = response.data
                setUser(response.data)
            }).

            catch((error) => {
                console.log("error:. ", error)
            })
           
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
                    <button onClick={() => modalOpen(row.id)} className="flex justify-center items-center bg-red-500 w-16 h-8 rounded-md text-white">
                        <TrashIcon className=" w-11 h-7" />
                    </button>
                    <button onClick={(e) => handleEdit(row.id)} className="bg-warning-500 flex justify-center items-center  w-16 h-8 rounded-md text-white">
                        <PencilIcon className=" w-11 h-7" />
                    </button>
                    <button onClick={handleAdd} className=" flex justify-center align-middle items-center bg-success-300 w-16 h-8 rounded-md text-white">
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

            ) : (<p>sem dados ...  </p>  )

            }


            {/*  action forms  */}

            {action === "edit" ? (<Edit closBox={closeBox} id_usr={id} />)
                : (action === "add" && (<Add closBox={closeBox} />)

                )}

            {/* MODAL  */}

            {modalIsOpen && (

                <Modalv2
                    isOpen={modalIsOpen}
                    onRequestClose={modalClose}
                    id={id}
                    deletUser={deletUser}
                />
            )}

        </React.Fragment>
    )


}