import React, { useContext } from "react";
import { LogoIcon, MoonIcon, SunIcon } from "./Assets/Icons"
import { ThemeContext } from "../App";

const Header = () => {

    const { isDark, setIsDark } = useContext(ThemeContext)

    return(
        <header className="header">
            <div className="container">
                <div className="logo-wrapper">
                    <div className="logo">
                        <LogoIcon />
                        <span>CPP CODE</span>
                    </div>
                    <button onClick={() => setIsDark(!isDark)} className="icon">
                        {isDark? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
                
            </div>
        </header>
    )
}

export default Header;