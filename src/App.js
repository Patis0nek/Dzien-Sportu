import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./home.js";
import Sale from "./subpages/sale.js";
import Raffles from "./subpages/raffles.js";

import Faq from "./subpages/faq.js";
import Privacy from "./subpages/privacy.js";
import About from "./subpages/about.js";
import News from "./subpages/news.js";
import Zawody from "./subpages/zawody.js";

import Navbar from './subpages/navbar.js';
import Footer from './subpages/footer.js';
import Preloader from './assets/js/preloader.js';

import AnimatePage from './subpages/animatepage.js';
import { AnimatePresence } from "framer-motion";


import { useLocation } from 'react-router-dom';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0
    });
  }, [pathname]);

  return null;
};

const PageNotFound = () => (
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

function Spinner() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{ display: loading ? "" : "none", overflowX: "hidden", overflowY: "hidden" }} className="preloader">
      <span></span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Spinner />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Zapisy' element={<Sale />} />
          <Route path='/Zawody' element={<Zawody />} />
          <Route path='/Regulamin' element={<Raffles />} />

          <Route path='/Faq' element={<Faq />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/About' element={<About />} />
          <Route path='/Pliki' element={<News />} />

          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </Router>
  );
}

export default App;