
import React, {
    useState,
    useContext,
    useEffect,
    useLayoutEffect
} from "react"

import DataTable, { defaultThemes } from 'react-data-table-component';
import { api } from "@/services/apiClient";
import { AuthContext } from "@/contexts/AuthContext";

interface credentials {
    userID?: any
}

export default function TableMovimentos(props: credentials) {

    const [movimentos, setMovimentos] = useState<any>(null);
    const { user } = useContext(AuthContext)
    // const [idUser , setIdUser] = useState<any>(user?.id)

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

        var userId: any = user?.id

        if (props.userID) {

            userId = props.userID
            console.log("props_userID :  ", userId)
        }

        console.log("userId :  ", userId)

        api.get('/finance/all', {
            params: {
                id: userId
            }
        })
            .then(response => {

                console.log("movimentos:. ", response.data)
                setMovimentos(response.data)
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
            name: 'Data',
            selector: (row: any) => row.data,
            sortable: true,
        },
        {
            name: 'tipo',
            selector: (row: any) => row.tipo,
            sortable: true,
        },
        {
            name: 'Montante',
            selector: (row: any) => row.montante,
            sortable: true,
        },
        {
            name: 'Descricao',
            selector: (row: any) => row.descricao,
            sortable: true,
        },
    ];

    return (

        <div className="border-1 border-indigo-600 p-2 rounded-md  m-5 flex flex-col">
            {movimentos ? (

                <DataTable
                    columns={columns}
                    data={movimentos}
                    customStyles={costomStyle}
                    pagination={true}
                    paginationPerPage={5}
                    selectableRows
                    fixedHeader
                    className='border-1 border-indigo-600 rounded-md'
                />
            ) : <p> sem dados ...</p>}

        </div >
    )
}