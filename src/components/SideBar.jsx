import React from "react";
import { NavLink } from "react-router-dom";
// import styles from './sidebar.module.css';

function SideBar() {
    return (
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </header>
    )
}

export default React.memo(SideBar);