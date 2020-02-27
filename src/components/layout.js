import PropTypes from "prop-types";
import React from "react";
import Header from "../components/header";
import CookieConsent from "react-cookie-consent";
import { Link } from "gatsby";


function Layout({ children }) {

  return (
    <>
    <div className="flex flex-wrap font-sans text-gray-900 ">
      <Header />
    </div>  


    <main className="p-2 md:p-4 max-w-6xl mx-auto font-sans text-gray-900">
      {children}
    </main>


    <div className="p-2 md:p-4 flex max-w-6xl mx-auto font-sans text-gray-900">
      <footer className="bg-white-400">
        <div className=" mx-auto py-4 text-sm">
          <p className="text-gray-400">
          {new Date().getFullYear()}, {` `} © AQUAMAT Consorzio 61122 Pesaro ITALY Via Bedosti, 21 | P.IVA e Cod Fisc. 02442290413 | <a class="text-yellow-400 underline" href="mailto:info@aquamat.it">info@aquamat.it</a>
          </p>
        </div>
      </footer>
    </div>
    <CookieConsent
        location="bottom"
        buttonText="Capisco"
        style={{ background: "#2B373B", fontSize: "12px" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
        expires={150}
    >
        Questo sito utilizza i cookies per agevolare la navigazione, la prosecuzione della navigazione comporta la prestazione del consenso all'uso dei cookie.{" "}
        <Link to={"/privacycookyepolicy"}>
          <span className="text-xs underline" >
           Clicca qui per avere maggiori informazioni
          </span>
        </Link>
    </CookieConsent>
  
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
