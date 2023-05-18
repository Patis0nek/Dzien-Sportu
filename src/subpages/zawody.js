import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "../assets/js/preloader.js";
import { NavLink } from "react-router-dom";


import OwlCarousel from 'react-owl-carousel';
import '../assets/css/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import AnimatePage from './animatepage.js';



const options = {
    singleItem: true,
    autoHeight: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true
};

const responsive = {
    0: {
        dotsEach: 4,
        items: 1,
    },
    600: {
        dotsEach: 2,
        items: 2,
    },
    1300: {
        dotsEach: 2,
        items: 3,
    },
    1600: {
        dotsEach: 1,
        items: 4,
    }
};




const Zawody = () => {
    return (
        <div>
            <AnimatePage>
                <section className="home features section-padding" id="features" style={{ minHeight: "90vh" }}>
                    <div class="row">
                        <OwlCarousel className='arch-carousel features-carousel' options={options} responsive={responsive} margin={12} nav>
                            <a className="linkzawody">
                                <div class="feature-item" >
                                    <div class="icon"><i class="fa-light fa-futbol"></i></div>
                                    <h3>Piłka nożna</h3>
                                    <p>Zawody piłki nożnej zostaną rozegrane na szkolnym boisku, każda klasa przydzielona zostanie do jednej z 4 grup</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-basketball"></i></div>
                                    <h3>Koszykówka</h3>
                                    <p>Turniej piłki koszykowej odbędzie się w poprzek dużego boiska szkolnego, a drużyny będą składać się z 5 koszykarzy</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-volleyball"></i></div>
                                    <h3>Siatkówka</h3>
                                    <p>Piłka siatkowa odbędzie się na sali gimnastycznej, klasy mogą zgłaszać po 2 czteroosobowe zespoły</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-rabbit-running"></i></div>
                                    <h3>Skok w dal</h3>
                                    <p>Jest to konkurencja otwarta, każy uczestnik Dnia Sportu może wziąć w niej udział w wyznaczonych godzinach</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-person-running"></i></div>
                                    <h3>Bieg na 100m</h3>
                                    <p>Bieg będzie pierwszą ind. konkurencją dnia. Klasy mogą zgłaszać maksymalnie jednego biegacza każda</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-person-to-portal"></i></div>
                                    <h3>Sztafeta 4x170m</h3>
                                    <p>Jest to jednoseryjny konkurs. Klasy rywalizować będą względem równoległych do siebie</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-table-tennis"></i></div>
                                    <h3>Tenis Stołowy</h3>
                                    <p>Zawody tenisa stołowego odbędą sie na małej salce, gdzie zostaną rozstawione 3 stoły. Klasy mogą zgłaszać po 2 osoby</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-hockey-sticks"></i></div>
                                    <h3>Unihokej</h3>
                                    <p>Konkurencja "floorballa" odbędzie się na sali gimnastycznej, klasy mogą zgłaszać drużyny pięcioosobowe</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-chess-knight"></i></div>
                                    <h3>Szachy</h3>
                                    <p>Szachiści powalczą między sobą o tytuł Mistrza Szachowego III Liceum Ogólnokształcącego w Bielsku-Białej</p>
                                </div>
                            </a>
                            <a className="linkzawody">
                                <div class="feature-item">
                                    <div class="icon"><i class="fa-light fa-seal"></i></div>
                                    <h3>Kapsle</h3>
                                    <p>Gra w kapsle to kultowa gra lat 80. XX wieku. Turniej odbędzie się na boisku asfaltowym - każdy może wziąć udział</p>
                                </div>
                            </a>
                        </OwlCarousel>
                    </div>
                    <a href="https://docs.google.com/document/d/1XvvZdqBOOOGcifx4GoXUBTWnDebL6MENvKTg1qvP9no/edit?usp=sharing" target="_blank" className="google-sheets-btn more-btn">
                        <i class="fa-solid fa-link"></i>
                        <span style={{ marginLeft: "10px" }}>Zasady</span>
                    </a>
                </section>
            </AnimatePage>
        </div >
    );
};

export default Zawody;
