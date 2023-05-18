import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            $(".toggle-theme i").addClass("fa-sun");
            $(".toggle-theme i").removeClass("fa-moon");
        } else {
            setTheme('light');
            $(".toggle-theme i").addClass("fa-moon");
            $(".toggle-theme i").removeClass("fa-sun");
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    window.addEventListener('load', (event) => {
        $(".preloader").fadeOut("slow");
    });

    return (
        <>
            <header>
                <NavLink className="logo" to="/">Dzień<jk> sportu</jk></NavLink>
                <nav>
                    <ul className="nav__links">
                        <li><NavLink to="/" isActive={(match, location) => {
                            return location.pathname === "/";
                        }}>Plan</NavLink></li>
                        <li><NavLink to="/zawody" isActive={(match, location) => {
                            return location.pathname === "/zawody";
                        }}>Zawody</NavLink></li>
                        <li><NavLink to="/zapisy" isActive={(match, location) => {
                            return location.pathname === "/zapisy";
                        }}>Zapisy</NavLink></li>
                        <li><NavLink to="/regulamin" isActive={(match, location) => {
                            return location.pathname === "/regulamin";
                        }}>Regulamin</NavLink></li>
                        <li><a className="toggle-theme" onClick={toggleTheme}><i className="fa-solid fa-sun"></i></a></li>
                    </ul>
                </nav>
            </header>
            <div className="navigation">
                <ul>
                    <li className={location.pathname === '/' ? 'list active' : 'list'} currentPage='home'>
                        <NavLink to="/">
                            <span className="icon"><i className="fa-regular fa-calendar"></i></span>
                            <span className="text">Plan</span>
                        </NavLink>
                    </li>
                    <li className={location.pathname === '/zawody' ? 'list active' : 'list'}>
                        <NavLink to="/zawody">
                            <span className="icon"><i className="fa-regular fa-goal-net"></i></span>
                            <span className="text">Zawody</span>
                        </NavLink>
                    </li>
                    <li className={location.pathname === '/zapisy' ? 'list active' : 'list'}>
                        <NavLink to="/zapisy">
                            <span className="icon"><i className="fa-regular fa-pen"></i></span>
                            <span className="text">Zapisy</span>
                        </NavLink>
                    </li>
                    <li className={location.pathname === '/regulamin' ? 'list active' : 'list'}>
                        <NavLink to="/regulamin">
                            <span className="icon"><i className="fa-regular fa-paperclip"></i></span>
                            <span className="text">Regulamin</span>
                        </NavLink>
                    </li>
                    <li className="lista">
                        <a className="toggle-theme" onClick={toggleTheme}>
                            <span className="icon"><i className="fa-regular fa-sun"></i></span>
                            <span className="text">Motyw</span>
                        </a>
                    </li>
                    {location.pathname === '/' || location.pathname === '/zawody' || location.pathname === '/zapisy' || location.pathname === '/regulamin' ?
                        <div className="indicator"></div> : null}
                </ul>
            </div>
        </>
    );
};

export default Navbar;