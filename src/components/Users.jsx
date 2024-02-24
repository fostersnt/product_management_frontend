import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import DataTable from 'react-data-table-component';
import styles from './Users.module.css';
import myData from './dataTable/CustomData.json'
import userColumns from './userColumns';

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

    const data = users;

    return (<div className={styles.main}>
        <div className="table table-responsive table-striped table-bordered">
            <DataTable
                columns={userColumns}
                data={data}
                pagination
                responsive
            />
        </div>
    </div>)
}

export default React.memo(Users);