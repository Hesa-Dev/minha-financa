
import React, {
    useState,
    useContext,
    useEffect,
    useLayoutEffect
} from "react"

import {
    ChartBarIcon,
    ArrowPathIcon,
    ArchiveBoxXMarkIcon
} from "@heroicons/react/20/solid";
import { Tooltip } from "@nextui-org/react";

import DataTable, { defaultThemes } from 'react-data-table-component';
import { api } from "@/services/apiClient";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import {  parseCookies } from "nookies";

interface credentials {
    userID?: any
}

export default function TableMovimentos(props: credentials) {

    const [movimentos, setMovimentos] = useState<any>(null);
    const { user } = useContext(AuthContext)

    const costomStyle = {
        headCells: {
            style: {
                color: "black",
                fontSize: '16px',
                fontWeight: 'bold'
            }
        },
    }

    async function loadTable() {

        const { '@dados.id': userId }: any = parseCookies();
        var usrID = userId

        if (props.userID) {

            usrID = props.userID
        }


        api.get('/finance/all', {
            params: {
                id: usrID
            }
        })
            .then(response => {

                setMovimentos(response.data)
            }).

            catch((error) => {
                console.log("error:. ", error)
            })
    }

    async function deleteTable() {


        switch (user?.tipo) {

            case "admin":
                api.get('/finance/delet/all'
                ).then(response => {
                    console.log("delete data:. ", response.data)
                    loadTable()
                }).catch((error) => {
                    console.log("error:. ", error)
                })
                break;
            default:
                toast.success("Permissão Negada! ")
                break;
        }
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
            name: 'Data',
            selector: (row: any) => row.data,
            sortable: true,
        },
        {
            name: 'Tipo',
            selector: (row: any) => row.tipo,
            sortable: true,
        },
        {
            name: 'Montante (€)',
            selector: (row: any) => row.montante,
            sortable: true,
        },
        {
            name: 'Saldo (€)',
            selector: (row: any) => row.saldo,
            sortable: true,
        },
        {
            name: 'Descrição',
            selector: (row: any) => row.descricao,
            sortable: true,
        },
    ];

    return (

        <div className="border-1 border-indigo-600 p-2 rounded-md  m-5 flex flex-col">

            <div className="flex flex-row justify-center items-center bg-indigo-600  text-white font-semibold">
                <div className="basis-1/2 flex items-center justify-center h-11 ">
                    <ChartBarIcon className="h-7 w-7 mr-2" />
                    <p> Meus Movimentos</p>
                </div>

                <div className="flex  justify-end   w-1/2  items-end">
                    <Tooltip content="Deletar Tabela">
                        <div
                            className=" mr-1   
                                cursor-pointer  
                                bg-white rounded-full 
                                flex items-center 
                                justify-center
                                h-10 w-10
                                text-indigo-600"
                            onClick={deleteTable}
                        >
                            <ArchiveBoxXMarkIcon className="h-7 w-7 hover:text-black" />
                        </div>

                    </Tooltip>

                    <Tooltip content="atualizar tabela">
                        <div
                            className=" mr-1   
                                    cursor-pointer  
                                    bg-white rounded-full 
                                    flex items-center 
                                    justify-center
                                     h-10 w-10 ml-3
                                      text-indigo-600 "
                            onClick={loadTable}
                        >
                            <ArrowPathIcon className="h-7 w-7 hover:text-black" />
                        </div>
                    </Tooltip>

                </div>
            </div>

            {movimentos ? (

                movimentos != "emppty" ? (

                    <DataTable
                        columns={columns}
                        data={movimentos}
                        customStyles={costomStyle}
                        pagination={true}
                        paginationPerPage={5}
                        selectableRows
                        fixedHeader
                    />
                ) : (<p> sem dados ...</p>)

            ) : (<p> sem dados ...</p>)

            }
        </div >
    )
}