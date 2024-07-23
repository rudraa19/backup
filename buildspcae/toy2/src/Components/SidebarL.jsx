import React from "react";
import './Sidebar.css';
import { Link } from "react-router-dom";
import data from './Assets/Data';

const SidebarL = ({ size = 20 }) => {
    return (
        <div className="content" style={{ float: 'left', width: `${size}%`, backgroundColor: 'black', height: '100vh', position: 'fixed' }}>
            <Link to="/">Home</Link>
            <br />
            <br />
            {
                data.map((section, sectionIndex) => {
                    const { summary, details } = section;
                    return (
                        <details key={sectionIndex} open>
                            <summary>{summary}</summary>
                            <ul>
                                {details.map((detail, detailIndex) => (
                                    <li key={detailIndex}>
                                        <Link to={`/${detail.path}`}>{detail.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    );
                })
            }
        </div>
    );
}

export default SidebarL;
