import '../assets/css/styles.css';
import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "../assets/js/preloader.js";
import { NavLink } from "react-router-dom";




const Error = () => (
    <div>
        <section className="about" style={{ minHeight: "100vh" }}>
            <section className="home" >
                <section className="privacy" style={{ marginTop: "12%" }}>
                    <span className="privacy_policy"><span style={{ color: "#768D70", fontFamily: "Cocon", fontSize: "80px" }}>404</span><span style={{ display: "block", fontSize: "22px" }}>Nie znaleziono strony</span></span>
                </section>
            </section>
        </section>
    </div >
)


export default Error;
