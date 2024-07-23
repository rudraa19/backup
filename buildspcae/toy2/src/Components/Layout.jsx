import React from "react";
import { Outlet } from "react-router-dom";
import SidebarL from "./SidebarL";

const Layout = ({size=20}) => {
    return (
        <>
        <SidebarL/>
        <div style={{float: 'left', width: `${100 - size - 5}%`, paddingLeft: 10, marginLeft: `${size + 1}%`}}> 
          <Outlet />
        </div>
        </>
    )
}

export default Layout