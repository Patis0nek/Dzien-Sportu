import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Firma</h4>
                            <ul>
                                <li><NavLink to="/about">o nas</NavLink></li>
                                <li><NavLink to="/pliki">pliki do pobrania</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Kategorie</h4>
                            <ul>
                                <li><NavLink to="/">plan</NavLink></li>
                                <li><NavLink to="/zawody">zawody</NavLink></li>
                                <li><NavLink to="/zapisy">zapisy</NavLink></li>
                                <li><NavLink to="/regulamin">regulamin</NavLink></li>                         </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Pomoc</h4>
                            <ul>
                                <li><NavLink to="/faq">FAQ</NavLink></li>
                                <li><a href="mailto:kontakt@dziensportu.info">kontakt</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Zaobserwuj nas</h4>
                            <div className="social-links">
                                <a href="https://www.instagram.com/dziensportu_3lo" target="_blank"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;