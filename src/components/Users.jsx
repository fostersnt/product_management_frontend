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

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const output = async () => {
      const options = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/users',
      };

      try {
        // const response = await axios.request(options);
        setUsers(myData);
      } catch (error) {
        console.error(error);
      }
    };
    output();
  }, []);

  const data = users;

  const exportCSV = () => {
    const csvData = Papa.unparse(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'users.csv');
  };

  const exportPDF = () => {
    const unit = 'pt';
    const size = 'A4'; // Use A1, A2, A3, or A4
    const orientation = 'landscape'; // 'portrait' or 'landscape'
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);
    const title = 'Users Data';
    const headers = userColumns.map((column) => column.name.toLowerCase() != 'actions' ? column.name : null);
    // const headers = userColumns.map((column) => column.name);

    const dataFormatted = data.map((row) => userColumns.map((column) => row[column.selector]));

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
    <div className="custom-toolbar">
      <button onClick={exportCSV}>Export CSV</button>
      <button onClick={exportPDF}>Export PDF</button>
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
        />
      </div>
    </div>
  );
}

export default React.memo(Users);
