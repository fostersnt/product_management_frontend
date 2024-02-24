import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import DataTable from 'react-data-table-component';
import styles from './Users.module.css';
import moment from 'moment';
import myData from './dataTable/CustomData.json'

function Users() {
    const [users, setUsers] = useState([]);

    function handleView() {
        return null;
    }

    function handleEdit() {
        return null;
    }

    function handleDelete() {
        return null;
    }

    useEffect(() => {
        const output = async () => {
            // const axios = require('axios');

            const options = {
                method: 'GET',
                // url: 'https://odds.p.rapidapi.com/v4/sports',
                url: 'http://127.0.0.1:8000/api/users',
                // params: { all: 'true' },
                // headers: {
                //     'X-RapidAPI-Key': '44f54adecamsh757b964b6f94522p112bbdjsn81d9f06f647d',
                //     'X-RapidAPI-Host': 'odds.p.rapidapi.com'
                // }
            };

            try {
                // const response = await axios.request(options);
                // const response = await axios.request(options);
                setUsers(myData);
                // setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        output();
    }, []);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Created At',
            selector: row => moment(row.created_at).format('MMMM Do YYYY, h:mm:ss a'),
            sortable: true,
        },
        {
            name: 'Updated At',
            selector: row => moment(row.updated_at).format('MMMM Do YYYY, h:mm:ss a'),
            sortable: true,
        },
        {
            name: 'Actions',
            // center: 'true',
            cell: (row) => (
                <div className={styles.action_buttons}>
                    <button onClick={() => handleView(row.id)} className='btn btn-info'>
                        <i className='bi bi-trash'></i>
                    </button>
                    <button onClick={() => handleEdit(row.id)} className='btn btn-primary'>
                        <i className='bi bi-eye'></i>
                    </button>
                    <button onClick={() => handleDelete(row.id)} className='btn btn-danger'>
                        <i className='bi bi-pencil-square'></i>
                    </button>
                </div>
            ),
        },
    ];

    const data = users;

    return (<div className={styles.main}>
        <div className="table table-responsive table-striped table-bordered">
            <DataTable
                columns={columns}
                data={data}
                pagination
                responsive
            />
        </div>
    </div>)
}

export default React.memo(Users);