import React from "react";
import { NavLink } from "react-router-dom";

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