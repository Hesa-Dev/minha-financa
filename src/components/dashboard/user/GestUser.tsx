
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
    PlusIcon,
    UserIcon,
    UsersIcon,
    UserPlusIcon,
    ArrowPathIcon
} from "@heroicons/react/20/solid";
import Edit from "./Edit";
import Add from "./Add";
import { UserContext } from "@/contexts/UserContext";
import Modal from 'react-modal';
import Modalv2 from "../includes/Modal";
import { Tooltip } from "@nextui-org/react";

interface credentials {
    utilizador?: any
}

Modal.setAppElement('#__next');

export default function GestUser(props: credentials) {

    const { users, delet } = useContext(UserContext)

    const [utilizadores, setUtilizadores] = useState<any>(null);
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
        // alert(action)
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


    async function loadTable() {

        api.get('/user/all').

        then(response => {
            // const resp = response.data
            setUtilizadores(response.data)
        }).

        catch((error) => {
            console.log("error:. ", error)
        })
        
    }

    useEffect(() => {

        loadTable()

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
            name: "Tipo",
            selector: (row: any) => row.tipo,
            sortable: true,
        },
        {
            name: "Accão",
            // selector: (row: any) => row.accao,
            cell: (row: any) => (
                <div className="flex flex-row gap-2 justify-center p-2">
                    <button onClick={() => modalOpen(row.id)} className="flex justify-center items-center bg-red-500 w-16 h-8 rounded-md">
                        <TrashIcon className=" w-11 h-7 text-white  " />
                    </button>
                    <button onClick={(e) => handleEdit(row.id)} className="bg-warning-500 flex justify-center items-center  w-16 h-8 rounded-md text-white">
                        <PencilIcon className=" w-11 h-7" />
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
            {props.utilizador === "admin" ?
                (utilizadores ? (
                    <div className="border-1 border-indigo-600 p-2 rounded-md  m-5 flex flex-col">

                        <div
                            className="flex flex-row justify-center items-center bg-indigo-600  text-white font-semibold"
                        >
                            <div className="basis-1/4   flex ">
                                <UserIcon className="h-7 w-7 mr-2" />
                                <p>{props.utilizador ? props.utilizador : "Admin"}</p>
                            </div>
                            <div className="basis-1/2   flex items-center justify-center">
                                <UsersIcon className="h-7 w-7 mr-2" />
                                <p> Gestão de Utilizadores</p>
                            </div>

                            {/*  add user  */}
                            <div className="basis-1/4 flex m-2 items-center justify-end ">

                                {/* atualizar tabela */}
                                <Tooltip content="atualizar tabela">
                                    <div
                                        className=" mr-1   
                                    cursor-pointer  
                                    bg-white rounded-full 
                                    flex items-center 
                                    justify-center
                                     h-10 w-10
                                      text-indigo-600 "
                                        onClick={loadTable}
                                    >
                                        <ArrowPathIcon className="h-7 w-7 hover:text-black" />
                                    </div>

                                </Tooltip>

                                <Tooltip content="Novo Utilizador">
                                    <div
                                        onClick={handleAdd}
                                        className=" ml-1  cursor-pointer  bg-white rounded-full flex items-center h-10 w-10 text-indigo-600 ">
                                        <UserPlusIcon className="h-7 w-7 ml-2 hover:text-black" />
                                    </div>
                                </Tooltip>
                            </div>
                        </div>

                        <DataTable
                            columns={columns}
                            data={utilizadores}
                            pagination={true}
                            paginationPerPage={5}
                            selectableRows
                            selectableRowsNoSelectAll
                            fixedHeader
                            customStyles={styles}
                        />

                    </div>
                ) : (<p>sem dados ...  </p>)


                ) : (<p>utilizador tipo :  {props.utilizador} </p>)


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