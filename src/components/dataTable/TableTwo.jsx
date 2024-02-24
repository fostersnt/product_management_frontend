import React, { useMemo } from 'react'
import { useTable } from "react-table";
import myData from './CustomData'
import COLUMNS from './Columns';
import './table.module.css'

function TableTwo() {
    const new_columns = useMemo(() => COLUMNS, []); // Wrap COLUMNS in a function for proper memoization
    const new_data = useMemo(() => myData, []);

    const tableInstance = useTable({
        columns: new_columns,
        data: new_data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = tableInstance;

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (<tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    })
                                }
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps}>
                                        {column.render('Footer')}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        </div>
    )
}

export default React.memo(TableTwo)