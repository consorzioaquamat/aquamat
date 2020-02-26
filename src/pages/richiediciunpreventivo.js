import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery, Link } from "gatsby";


function RichiediciunpreventivoPage() {
  return (

    <Layout>
      {/* <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      /> */}
      <section className="mb-8 flex m-auto sm:justify-center w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5">
        <form  name="preventivo-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field" 
          action="/success"
          className="w-full">
          
          <input type="hidden" name="form-name" value="preventivo-form" />
          <div className="flex flex-wrap ">
   
            <h2 className="mb-4 leading-tight text-3xl font-bold text-yellow-400">
             Compila il form sottostante per richiederci un preventivo
            </h2>
          </div>  
          
        
          <label
            className="block mb-2 text-xs font-bold uppercase"

          >
            Info
          </label>
          <input
            className="w-full mb-6 form-input"
            name="first-name"
            placeholder="Nome Azienda"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
          >
            Indirizzo Email
          </label>
          <input
            className="w-full mb-6 form-input"
            name="indirizzo-email"
            placeholder="Indirizzo Email"
            type="email"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"

          >
            Contatto Telefonico
          </label>
          <input
            className="w-full mb-6 form-input"
            name="first-name"
            placeholder="Num. Telefono"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
          >
            Regione/Provincia
          </label>
          <input
            className="w-full mb-6 form-input"
            name="regione-provincia"
            placeholder="Indicare regione e città dell'azienda e/o Cantiere"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"

          >
            Messaggio
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            name="message"
            placeholder="Inserisci i dettagli della richiesta..."
            rows="8"
          />


          <div className="md:flex md:items-center mb-6">  
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input id="myCheck" class="mr-2 leading-tight"  name=" Do il consenso al trattamento dei dati forniti" type="checkbox" />
                <span class="text-xs font-thin leading-tight">
                  Do il consenso al trattamento dei dati forniti <br/> <Link to={"/privacycookyepolicy"}><div className="underline text-small text-gray-500">Informativa ai sensi del D.Lgs. 196/2003 "Codice in materia di protezione dei dati personali"</div></Link>
                </span>
              </label>
          </div>      

          <button type="submit" className="w-1/4 text-sm md:text-base ml-auto right-0 h-12 my-auto bg-yellow-400 hover:bg-transparent text-black hover:text-gray-700 font-semibold py-2 px-2  sm:px-4 border border-yellow-400 rounded focus:outline-none ">
             Invia
          </button>
        </form>
      </section>
    </Layout>

  );
}

export default RichiediciunpreventivoPage;
