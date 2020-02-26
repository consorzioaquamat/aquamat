import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";


function UniscitianoiPage() {
  return (

    <Layout>
      {/* <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      /> */}
      <section className="mb-8 flex m-auto sm:justify-center w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5">
        <form className="w-full">
          <div className="flex flex-wrap ">
   
            <h2 className="mb-4 leading-tight text-3xl font-bold text-yellow-400">
            Compila il form sottostante se sei interessato a diventare uno dei nostri assciati o un nostro nuovo fornitore
            </h2>
          </div>  
          
          <label className="block text-xs mb-2 font-bold uppercase">Sono iteressato a diventare</label>
          <div class="inline-block relative w-64 mb-4">
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Un vostro associato</option>
              <option>Un vostro fornitore</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

        
          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            Info
          </label>
          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Nome Azienda"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="indirizzo-email"
          >
            Indirizzo Email
          </label>
          <input
            className="w-full mb-6 form-input"
            id="indirizzo-email"
            placeholder="Indirizzo Email"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="Contact-number"
          >
            Contatto Telefonico
          </label>
          <input
            className="w-full mb-6 form-input"
            id="first-name"
            placeholder="Num. Telefono"
            type="text"
          />

          <div class="md:flex md:items-center mb-6">
          
              <label class="md:w-2/3 block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox"/>
                <span class="text-xs font-thin leading-tight ">
                Do il consenso al trattamento dei dati forniti <br/> <a class="text-small text-gray-500" href="">Informativa ai sensi del D.Lgs. 196/2003 "Codice in materia di protezione dei dati personali"</a>
                </span>
              </label>
       
          </div>    

          <button className="w-1/4 text-sm md:text-base ml-auto right-0 h-12 my-auto bg-yellow-400 hover:bg-transparent text-black hover:text-gray-700 font-semibold py-2 px-2  sm:px-4 border border-yellow-400 rounded focus:outline-none ">
             Invia
          </button>
        </form>
      </section>
    </Layout>

  );
}

export default UniscitianoiPage;