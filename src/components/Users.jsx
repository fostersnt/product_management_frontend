import { useEffect, useState } from 'react';
import axios from "axios";
import DataTable from 'react-data-table-component';
import styles from './Users.module.css';
import moment from 'moment';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const output = async () => {
            // const axios = require('axios');

            const options = {
                method: 'GET',
                // url: 'https://odds.p.rapidapi.com/v4/sports',
                url: 'http://127.0.0.1:8000/api/users',
                params: { all: 'true' },
                headers: {
                    'X-RapidAPI-Key': '44f54adecamsh757b964b6f94522p112bbdjsn81d9f06f647d',
                    'X-RapidAPI-Host': 'odds.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                // const response = await axios.request(options);
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        output();
    }, []);

    const columns = [
        {
            name: 'name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'created_at',
            selector: row => moment(row.created_at).format('MMMM Do YYYY, h:mm:ss a'),
            sortable: true,
        },
        {
            name: 'updated_at',
            selector: row => moment(row.updated_at).format('MMMM Do YYYY, h:mm:ss a'),
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className={styles.action_buttons}>
                    <button onClick={() => handleView(row.id)}>View</button>
                    <button onClick={() => handleEdit(row.id)}>Edit</button>
                    <button onClick={() => handleDelete(row.id)} className={styles.btnWidth}>Delete</button>
                </div>
            ),
        },
    ];

    const data = users;

    return (<div className={styles.main}>
        <div className={styles.table}>
            <DataTable
                columns={columns}
                data={data}
                pagination
            />
        </div>
    </div>)
}