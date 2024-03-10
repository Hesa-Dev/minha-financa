
import React from 'react';
import DataTable, { defaultThemes } from 'react-data-table-component';

export default function Table() {

    const costomStyle = {
        headCells: {
            style: {
                color: "black",
                fontSize: '16px',
                fontWeight: 'bold'
            }
        },
    }

    const data = [
        {
            id: 1,
            data: '11-12-2024',
            nome: 'Mateya',
            tipo: 'Saida',
            montante: '€ 1000',
            descr: 'pagamento da renda'
        },

        {
            id: 1,
            data: '11-12-2024',
            nome: 'Honorio',
            tipo: 'Saida',
            montante: '€ 2000',
            descr: 'pagamento de servicos'
        },
        // Add more data as needed
    ];

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
            name: 'Nome',
            selector: (row: any) => row.nome,
            sortable: true,
        },
        {
            name: 'Tipo',
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
            selector: (row: any) => row.descr,
            sortable: true,
        },
    ];

    return (

        <DataTable
            columns={columns}
            data={data}
            customStyles={costomStyle}
            pagination={true}
            paginationPerPage={5}
            selectableRows
            fixedHeader
            className='border-1 border-indigo-600 rounded-md'
        />
    )

}