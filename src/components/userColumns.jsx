import moment from 'moment';
import styles from './Users.module.css';

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
        selector: row => moment(row.created_at).format('Do YYYY, h:mm:ss a'),
        // selector: row => moment(row.created_at).format('MMMM Do YYYY, h:mm:ss a'),
        sortable: true,
    },
    {
        name: 'Updated At',
        selector: row => moment(row.updated_at).format('Do YYYY, h:mm:ss a'),
        // selector: row => moment(row.updated_at).format('MMMM Do YYYY, h:mm:ss a'),
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

export default columns;