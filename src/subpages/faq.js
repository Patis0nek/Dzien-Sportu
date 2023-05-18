import '../assets/css/styles.css';
import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "../assets/js/preloader.js";
import { NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';



const Faq = () => {
    return (
        <div>
            <section className="about">
                <section className="home" style={{ minHeight: "100vh" }}>
                    <section className="privacy  faqp">
                        <span className="privacy_policy">FAQ</span>
                    </section>
                    <section className="faq section-padding">
                        <div className="rowfaq justify-content-center">
                            <div className="col-lg-10">
                                <div id="accordion">
                                    <div className="accordion-item">
                                        <div className="accordion-header" data-toggle="collapse" data-target="#collapse-01">
                                            <h3>Co to jest Dzień Sportu?</h3>
                                        </div>
                                        <div className="collapse show" id="collapse-01">
                                            <div className="accordion-body">
                                                <p>Dzień Sportu to wydarzenie sportowego organizowane przez Juliana Jagiełło przy Zespole Szkół Ogólnokształcących im. Stefana Żeromskiego w Bielsku-Białej</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header collapsed" data-toggle="collapse" data-target="#collapse-02">
                                            <h3>Czy mogę się zapisać?</h3>
                                        </div>
                                        <div className="collapse" id="collapse-02">
                                            <div className="accordion-body">
                                                <p>Każy uczeń III LO im. Stefana Żeromskiego może zostać zapisany przez przewodniczącego klasy</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header collapsed" data-toggle="collapse" data-target="#collapse-03">
                                            <h3>Regulamin jest dla mnie niezrozumiały</h3>
                                        </div>
                                        <div className="collapse" id="collapse-03">
                                            <div className="accordion-body">
                                                <p>Jeżeli któryś z punktów regulaminu jest dla Ciebie niejasny skonktaktuj się z nami poprzez kategorię "kontakt"</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header collapsed" data-toggle="collapse" data-target="#collapse-04">
                                            <h3>Czy harmonogram ulegnie zmianie?</h3>
                                        </div>
                                        <div className="collapse" id="collapse-04">
                                            <div className="accordion-body">
                                                <p>Możliwe, jednak żadna z dyscyplin nie powinna zostać odwołana, a co najwyżej przełożona ze względu na opóźnienie innych konkurencji</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </div>
    );
}

export default Faq;
