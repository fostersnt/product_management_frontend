import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import styles from './Users.module.css';
import myData from './dataTable/CustomData.json';
import userColumns from './userColumns';
import moment from 'moment';

function formatDate(any_date){
    try {
        any_date = moment(any_date).format('Do YYYY, h:mm:ss a');
    } catch (error) {
        any_date = 'N/A';
    }
    return any_date;
}

function handleSelectedRows({selectedRows})
{
    if (selectedRows.length > 0) {
        console.log("SELECTED ROWS: ", selectedRows[0].name);
    } else {
        console.log("NO SELECTED ROW");
    }
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const output = async () => {
      const options = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/users',
      };

      try {
        const response = await axios.request(options);
        setUsers(response.data);
        console.log(response);
        // setUsers(myData);
      } catch (error) {
        console.error(error);
      }
    };
    output();
  }, []);

  const data = users;

  const exportCSV = () => {
    // let new_data = data.map(item => {
    //     return {...data, }
    // })
    const csvData = Papa.unparse(data.map((row) => ({
        // Apply your formatting to each property in the row
        name: row.name.toUpperCase(), // Example: Convert name to uppercase
        email: row.email.toLowerCase(), // Example: Convert email to lowercase
        created_at: formatDate(row.created_at), // Example: Format created_at date
        updated_at: formatDate(row.updated_at), // Example: Format updated_at date
        // Add more properties as needed
      })));
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'users.csv');
  };

  const exportPDF = () => {
    const unit = 'pt';
    const size = 'A4'; // Use A1, A2, A3, or A4
    const orientation = 'landscape'; // 'portrait' or 'landscape'
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    const pdfTableStyles = {
        theme: 'grid', // 'plain', 'striped', 'grid', or 'css'
        headStyles: {
          fillColor: [214, 214, 214], // Header background color
        },
        bodyStyles: {
          textColor: 50, // Text color
          fillColor: [255, 255, 255], // Body background color
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245], // Alternate row background color
        },
      };

    doc.setFontSize(15);
    const title = 'Users Data';
    const headers = userColumns.map((column) => column.name.toLowerCase() != 'actions' ? column.name : null);
    // const headers = userColumns.map((column) => column.name);

    const dataFormatted = data.map((row) => {
        let formatCreatedAt = formatDate(row.created_at);
        let formatUpdatedAt = formatDate(row.updated_at);
        return [row.name, row.email, formatCreatedAt, formatUpdatedAt]
    });
    
    // Add headers and rows to the table
    doc.autoTable({
      head: [headers],
      body: dataFormatted,
      margin: { top: 60, left: marginLeft, right: marginLeft, bottom: 40 },
      styles: { fontSize: 10, cellPadding: 8 },
    });

    // Add title
    doc.text(title, marginLeft, 40);

    // Save the PDF
    doc.save('users.pdf');
  };

  const customToolbar = () => (
    <div className="export_buttons">
      <button onClick={exportCSV}>CSV</button>
      <button onClick={()=>exportPDF()}>PDF</button>
    </div>
  );

  return (
    <div className={styles.main}>
        {customToolbar()}
      <div className="table table-responsive table-striped table-bordered">
        <DataTable
          columns={userColumns}
          data={data}
          pagination
          responsive
          customToolbar={customToolbar}
          selectableRows
          onSelectedRowsChange={handleSelectedRows}
        />
      </div>
    </div>
  );
}

export default React.memo(Users);
