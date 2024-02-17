import { useEffect, useState } from 'react';
import axios from "axios";
import DataTable from 'react-data-table-component';
// import { axios } from './../../node_modules/axios/dist/esm/axios';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const output = async () => {
            // const axios = require('axios');

            const options = {
                method: 'GET',
                url: 'https://odds.p.rapidapi.com/v4/sports',
                params: { all: 'true' },
                headers: {
                    'X-RapidAPI-Key': '44f54adecamsh757b964b6f94522p112bbdjsn81d9f06f647d',
                    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        output()
    });

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'key',
            selector: row => row.key,
            sortable: true,
        },
        {
            name: 'group',
            selector: row => row.group,
            sortable: true,
        },
        {
            name: 'description',
            selector: row => row.description,
            sortable: true,
        },
    ];

    const data = users;

    return (<div>
        <h1>Hello world</h1>
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    </div>)
}