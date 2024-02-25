import React from "react";
import Users from "./components/users/Users";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import TableOne from "./components/dataTable/TableOne";
import TableTwo from "./components/dataTable/TableTwo";
import TableThree from "./components/dataTable/TableThree";

function App() {
  return (
    <BrowserRouter>
      <div id="main_container">
        <SideBar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/table-one" element={<TableOne />} />
            <Route path="/table-two" element={<TableTwo />} />
            <Route path="/table-three" element={<TableThree />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
