
import { Row } from '@react-email/components';
import React from 'react';
import DataTable from 'react-data-table-component';
import { any } from 'zod';

export default function Table() {

    const data = [
        { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
        // Add more data as needed
    ];

    const columns = [
        {
            name: "ID",
            selector: (row: any)=>row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: (row: any)=>row.name,
            sortable: true,
        },
        {
            name: 'Age',
            selector: (row: any)=>row.age,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row: any)=>row.email,
            sortable: true,
        },
    ];

    return (

            <DataTable
                title="User Data"
                columns={columns}
                data={data}
                pagination={true}
                paginationPerPage={5}
            />
    )

}