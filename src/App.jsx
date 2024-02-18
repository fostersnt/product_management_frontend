import Users from './components/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/cat' Component={Users}></Route>
      </Routes>
      {/* <Users /> */}
    </BrowserRouter>
  )
}

export default App
