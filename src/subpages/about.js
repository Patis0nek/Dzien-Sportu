import '../assets/css/styles.css';
import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "../assets/js/preloader.js";
import { NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';



const About = () => {
    return (
        <div>
            <section className="about">
                <section className="home">
                    <section className="aboutus" style={{ fontSize: "16px" }}>
                        <span style={{ fontFamily: "ff-cocon-pro" }}>Dzień Sportu</span> to wydarzenie sportowe którego organizatorem jest Julian Jagiełło, odbędzie się na terenie Zespołu Szkół Ogólnokstzałcących im. Stefana Żeromskiego w Bielsku-Białej. Zaplanowane jest na 2 czerwca 2023. Uwzględnia wiele konkurencji sportowych oraz kiermasz słodkości i koncert muzyczny.
                        <br />
                    </section>
                    <span className="copyright">
                        <p> Copyright ©<span style={{ fontFamily: "ff-cocon-pro" }}> Dzień<span style={{ color: "#768D70" }}> Sportu</span></span>™ 2023<span style={{ display: "block", marginTop: "4px" }}> All rights reserved. Website designed by Patis0n. The name "Dzień Sportu" is a trademark.</span></p>
                    </span>
                </section>
            </section>
        </div>
    );
}

export default About;
