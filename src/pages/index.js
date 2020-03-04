import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import homebanner from "../images/aquamat-home.jpg" 
import catalogo from "../images/aquamat-catalogo.png" 
import catalogoPdf from "../downloads/catalogo-aquamat.pdf" 




function IndexPage() {
  return (
    <Layout >
      <SEO keywords={[`aquamat`, `tubature`, `idraulica`, `sottosuolo`, `servizi`]} title="Aquamat" description="Consorzio nazionale d'acquisto che nasce dall'unione di professionisti del settore dell'idraulica del sottosuolo"/>
      <div class="flex-wrap">
        <div className="w-full mt-0 pt-0">
          <img src={homebanner} alt="aquamat banner"/>
        </div>

          <div className="leading-relaxed text-gray-500 py-8 content-center text-justify">
          Il Consorzio Aquamat è un consorzio nazionale d'acquisto che nasce dall'unione di professionisti del settore dell'idraulica del sottosuolo in un progetto comune con alla base pricipi di cooperazione attiva tra rivenditori e fornitori. L'obiettivo di Aquamt è il dialogo tra gli associati, lo scambio di informazioni e la condivisione di esperienze che permettano di uscire dalla realtà regionale tipica della rivendita per potersi proporre al mercato nazione ed estero. Attualmente il Consorzio è composto da 9 associati, rivenditore di materiale all'ingrosso. Aquamat si affianca ad essi, divenendo una tavola rotonda in cui scambiare know-how e stimoli all'azione. La struttura consortile è per i consorziati che la compongono un laboratorio di idee ed un sostegno per lo sviluppo dei progetti proposti. Crediamo che la vera forza del Consorzio Aquamat sia data dal posizionamento sul mercato come "gruppo" affiatato ed innovativo, capace sicuramente di ottenere condizioni commerciali vantaggiose (attualmente vantiamo circa 40 contratti nazionali d'acquisto), ma anche di porsi come soggetto promotore di progetti e iniziative in collaborazione con i propri fornitori e partners.
          </div>
          <div className="flex flex-wrap">
              <div className="md:w-1/2 py-4 justify-center">
              <a href={catalogoPdf} download><div className="text-3xl text-yellow-400 font-bold">Scarica il nostro catalogo</div></a>
                <div className="text-gray-700">Laminazione e trattamento acque</div>
                <a href={catalogoPdf} download><img className="w-3/2 p-4" src={catalogo} alt="aquamat catalogo download"/></a>
              </div>

              <div className="md:w-1/2 py-4">
                <div className="text-3xl text-yellow-400 font-bold"> Principali vantaggi di associarsi:</div>
                
                <ul className="list-disc px-8 pt-12 text-gray-700">
                  <li>Supporto alle attività delle imprese consorziate</li>
                  <li>Magazzino interscambiabile fra le aziende consorziate</li>
                  <li>Partecipazione a fiere nazionali ed estere</li>
                  <li>Attività di promozione</li>
                  <li>Riunioni per lo scambio di informazioni ed idee, di prodotti e di nuovi metodi di vendita</li>
                  <li>Ricerca di nuovi prodotti</li>
                  <li>Organizzazione per nuovi canali di vendita</li>
                  <li>Rappresentanza di aziende estere per l’italia</li>
                  <li>Mappatura del territorio</li>
                  <li>Ricerca gare d’appalto per grandi opere</li>
                  <li>Cataloghi comuni</li>
                </ul>
              </div>
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage;
