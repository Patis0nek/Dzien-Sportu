import '../assets/js/main.js';
import '../assets/css/item-style.css';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "../assets/js/preloader.js";
import { NavLink } from "react-router-dom";

import AnimatePage from './animatepage.js';

const Sale = () => {
    return (
        <div>
            <AnimatePage>
                <section className="sale">
                    <section className="home" style={{ minHeight: "100vh" }}>
                        <div className="rules" style={{ marginTop: "40px" }}>
                            <div className="rule fst">
                                <span className="titlep"><span style={{ color: "#768D70" }}>Zasady </span>rejestracji</span>
                                <span className="ruletext rultxt"><br />1. Przewodniczący klasy odpowiada za zapisanie podopiecznych w terminie
                                    <br />
                                    2. Aby skontaktować się w sprawie uzyskania dostępu do pliku, prosimy przewodniczących o skorzystanie z kategorii <a href="mailto:kontakt@dziensportu.info">kontakt</a> lub MobiDziennika
                                    <br />
                                    3. Należy przestrzegać wszystkich wytycznych, szczególnie tych zawartych w piątym punkcie regulaminu
                                    <br />
                                    4. Zapisy dostępne od <span className="datab">18/04/2023</span>
                                </span>
                            </div>
                        </div>
                        <a href="https://docs.google.com/spreadsheets/d/1KbgBABJ6KHRWY0RQ8xAtBK0MxFFgMCVoMYWTESd38n8/edit?usp=sharing" target="_blank" className="google-sheets-btn zapisy-btn">
                            <img src="https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png"></img>
                            <span>Podgląd</span>
                        </a>
                    </section>
                </section>
            </AnimatePage>
        </div>
    );
}

export default Sale;
