import React from "react"
import './Sidebar.css'
import { Link } from "react-router-dom"

const SidebarL = ({size = 20}) => {
    return (
        
        <div className="content" style={{float: 'left', width: `${size}%`, backgroundColor: 'black', height: '100vh', position: 'fixed',}}>
            <a href="/">Home</a>
            <br />
            <br />
            <details open>
                <summary>C++</summary>
                <ul>
                    <Link to="/article"><li>article</li></Link>
                    <Link to="/hello"><li>hello</li></Link>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                </ul>
            </details>
        </div>
    )
}

export default SidebarL;
