import React from "react";
import { NavLink } from "react-router-dom";
// import styles from './sidebar.module.css';

function SideBar() {
    return (
        <div id="side_bar">
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/users'>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/table-one'>Table One</NavLink>
                </li>
                <li>
                    <NavLink to='/table-two'>Table Two</NavLink>
                </li>
                <li>
                    <NavLink to='/table-three'>Table Three</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default React.memo(SideBar);