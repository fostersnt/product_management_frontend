import Users from './components/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import SideBar from './components/SideBar';
import TableOne from './components/dataTable/TableOne';
import TableTwo from './components/dataTable/TableTwo';
import TableThree from './components/dataTable/TableThree';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div id='main_container'>
        <SideBar></SideBar>
        <div id='content'>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/users' Component={Users}></Route>
            <Route path='/table-one' Component={TableOne}></Route>
            <Route path='/table-two' Component={TableTwo}></Route>
            <Route path='/table-three' Component={TableThree}></Route>
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  )
}

export default App
