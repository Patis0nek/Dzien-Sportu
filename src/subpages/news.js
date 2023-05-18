import '../assets/js/main.js';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import Preloader from "../assets/js/preloader.js";
import { NavLink } from "react-router-dom";

import AnimatePage from './animatepage.js';


const News = () => {
    return (
        <div>
            <AnimatePage>
                <section className="home" style={{ minHeight: "90vh" }}>
                    <section className="news" style={{ marginTop: "40px" }} >
                        <a href="https://docs.google.com/document/d/19TwdKHLylxq_xIHcp0FgV4LTYU6C2kwURiKDpz_fYX4/edit?usp=sharing" target="_blank" className="google-sheets-btn google-docs doc1">
                            <img src="https://www.gstatic.com/images/branding/product/1x/docs_48dp.png"></img>
                            <span>Regulamin</span>
                        </a>

                        <a href="https://docs.google.com/document/d/1C1YotyLrPO0Tralfphlv7s-bgAgTjJL9dcYBoFyiHlc/edit?usp=sharing" target="_blank" className="google-sheets-btn google-docs doc2">
                            <img src="https://www.gstatic.com/images/branding/product/1x/docs_48dp.png"></img>
                            <span>Plan Dnia</span>
                        </a>

                        <a href="https://docs.google.com/document/d/1XvvZdqBOOOGcifx4GoXUBTWnDebL6MENvKTg1qvP9no/edit?usp=sharing" target="_blank" className="google-sheets-btn google-docs doc6">
                            <img src="https://www.gstatic.com/images/branding/product/1x/docs_48dp.png"></img>
                            <span>Zawody</span>
                        </a>

                        <a href="https://docs.google.com/spreadsheets/d/1KbgBABJ6KHRWY0RQ8xAtBK0MxFFgMCVoMYWTESd38n8/edit?usp=sharing" target="_blank" className="google-sheets-btn google-docs zapisy-btn doc3">
                            <img src="https://www.gstatic.com/images/branding/product/1x/sheets_48dp.png"></img>
                            <span>Zapisy</span>
                        </a>

                        <a href="https://photos.app.goo.gl/fnW8fCRUrXb5ZP1FA" target="_blank" className="google-sheets-btn google-docs doc7">
                            <img src="https://www.gstatic.com/images/branding/product/1x/photos_48dp.png"></img>
                            <span>Zdjęcia</span>
                        </a>

                        <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd3EWX1m6M7DunBhr8lwXrBht9NVrBSDjDVk_24jwAsxYwvBw/formResponse" target="_blank" className="google-sheets-btn google-docs doc5">
                            <img src="https://www.gstatic.com/images/branding/product/1x/forms_48dp.png"></img>
                            <span>Ankieta</span>
                        </a>

                        <a href="https://goo.gl/maps/dTaSUEeLG8SorQxB6" target="_blank" className="google-sheets-btn google-docs doc4">
                            <img src="https://www.gstatic.com/images/branding/product/1x/streetview_48dp.png"></img>
                            <span>Lokalizacja</span>
                        </a>
                    </section>
                </section>
            </AnimatePage>
        </div >
    );
};

export default News;
