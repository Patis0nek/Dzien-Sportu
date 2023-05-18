import './assets/css/styles.css';
import './assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "./assets/js/preloader.js";
import { NavLink } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc, onSnapshot, runTransaction, orderBy, query, where, Timestamp, setDoc } from 'firebase/firestore';

import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage';

import { increment } from 'firebase/firestore';

import { useCookies } from 'react-cookie';

import OwlCarousel from 'react-owl-carousel';
import './assets/css/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import AnimatePage from './subpages/animatepage.js';

import InstagramEmbed from 'react-instagram-embed';



const options = {
    singleItem: true,
    autoHeight: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
    dots: true
};

const responsive = {
    0: {
        dotsEach: 6,
        items: 1,
    },
    600: {
        dotsEach: 6,
        items: 2,
    },
    1300: {
        dotsEach: 6,
        items: 3,
    },
    1600: {
        dotsEach: 6,
        items: 4,
    }
};





const Home = () => {
    return (
        <div>
            <AnimatePage>
                <section className="home">
                    <section className="drop zdjecia">
                        <img className="mainbg bg1" src="sport.png"></img>
                        <img className="mainbg bg2" src="sport2.png"></img>
                    </section>

                    <i class="fa-light fa-chevron-down indp"></i>

                    <section className="kolory">
                        <span className="blok bl1"></span>Zawody Otwarte
                        <span className="blok bl2"></span>Faza Grupowa
                        <span className="blok bl3"></span>Faza Pucharowa
                        <span className="blok bl4"></span>Finał
                    </section>


                </section>
            </AnimatePage>
        </div>
    );
}


export default Home;
