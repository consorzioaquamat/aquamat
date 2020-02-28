import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import servizi from "../images/aquamat-servizi.png"

function Servizi() {
  return (
    <Layout >
      <SEO title="Servizi"/>
    
        <div class="flex flex-wrap">
            <div class="md:w-1/2 p-4">
                <div class="text-3xl text-yellow-400 font-bold">Servizi</div>
                    <div class="text-yellow-400 font-bold mb-4">Supporto alle attività delle imprese consorziate.</div>
                    <ul class="list-disc text-gray-700 px-4">
                    <li>Magazzino interscambiabile fra le aziende consorziate</li>
                    <li>Partecipazione a fiere</li>
                    <li>Promozione</li>
                    <li>Progettazione per lavori di fognatura e acquedotto</li>
                    <li>Riunioni per lo scambio di idee, di prodotti e di nuovi metodi di vendita</li>
                    <li>Ricerca di nuovi prodotti</li>
                    <li>Organizzazione per nuovi canali di vendita</li>
                    <li>Assicurazione del credito</li>
                    <li>Rappresentanza di aziende estere per l’italia</li>
                    <li>Mappatura del territorio</li>
                    <li>Ricerca gare d’appalto per grandi opere</li>
                </ul> 
            </div>

            <div class="md:w-1/2 p-4">
                <img src={servizi} alt="servizi banner"/>
            </div>


            <div class="w-full p-4 ">
                <div class="text-3xl text-yellow-400 font-bold">Prodotti</div>
            </div>

            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">ACQUEDOTTI</div>
                <ul class="list-disc text-gray-700 px-4">
                    <li>Tubi e raccordi PE 100, RC e Corazzato</li>
                    <li>Tubi e raccordi in Ghisa Sferoidale</li>
                    <li>Tubi e raccordi in Acciaio</li>
                    <li>Valvole</li>
                    <li>Saracinesche</li>
                    <li>Sfiati</li>
                    <li>Attrezzature per montaggio e collaudo</li>
                    <li>Articoli per allacciamenti e riparazioni</li>
                </ul> 
            </div>
           
            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">GASDOTTI</div>
                <ul class="list-disc text-gray-700 px-4">
                    <li>Tubi e raccordi in PE 100 e PE 80</li>
                    <li>Tubi e raccordi in Acciaio</li>
                    <li>Valvole</li>
                    <li>Sfiati</li>
                    <li>Articoli per allacciamenti e manutenzioni</li>
                </ul> 
            </div>
           
            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">IRRIGAZIONE</div>
                <ul class="list-disc text-gray-700 px-4">
                    <li>Tubi e raccordi in PVC Pressione</li>
                    <li>Tubi e raccordi PE BD</li>
                    <li>Tubi e raccordi in PRFV</li>
                    <li>irrigatori e pezzi speciali</li>
                    <li>Valvole idrauliche</li>
                </ul> 
            </div>

            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">FOGNATURE</div>
                <ul class="list-disc text-gray-700 px-4">
                    <li>Tubi e raccordi in PVC</li>
                    <li>TubiCorrugati in PE e PP</li>
                    <li>Tubi in Gres e Cemento</li>
                </ul> 
            </div>
           
            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">ANTINCENDIO</div>
                <ul class="list-disc text-gray-700 px-4">
                   <li>Idranti soprauolo e sottosuolo</li>
                   <li>Cassette antincendio</li>
                   <li>Raccordi e Manichette</li>
                   <li>Gruppi automatici antincendio</li>
                </ul> 
            </div>
           
            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">DRENAGGI</div>
                <ul class="list-disc text-gray-700 px-4">
                    <li>Tubi in PVC fessurati</li>
                    <li>Tubi in PEAD Corrugato fessurati</li>
                    <li>Canalette</li>
                </ul> 
            </div>

            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">DEPURAZIONE</div>
                <ul class="list-disc text-gray-700 px-4">
                    <li>Serbatoi in PEAD da interno ad esterno</li>
                    <li>Fosse biologiche</li>
                    <li>Vasche Imhoff</li>
                    <li>Degrassatori</li>
                    <li>Impianti di sollevamento e prima pioggia</li>
                </ul> 
            </div>

            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">TELECOMUNICAZIONE</div>
                <ul class="list-disc text-gray-700 px-4">
                  <li>Cavidotto in PEAD corrugato</li>
                  <li>CAvidotto in PVC autoestinguente</li>
                  <li>Pozzetti in CLS omologati Telecom Italia©</li>
                  <li>Chiusini in Ghisa Sfreroidale omologati Telecom Italia©</li>
                  <li>Tritubo i PEAD per passaggio cavi</li>
                  <li>Articoli per allacciamenti</li>
                  <li>Cassette</li>
                </ul> 
            </div>
           
            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">STRADALE</div>
                <ul class="list-disc text-gray-700 px-4">
                    <li>Impianti di prima pioggia</li>
                     <li>Batterie stradali e New Jersey</li>
                     <li>Chiusini e caditoie</li>
                     <li>pozzetti e tubi in CLS</li>
                </ul> 
            </div>

            <div class="md:w-1/3 p-4">
                <div class="text-2xl text-yellow-400 font-bold">ENERGIE RINNOVABILI</div>
                <ul class="list-disc text-gray-700 px-4">
                  <li>Fotovoltaico</li>
                  <li>Geotermo</li>
                  <li>Impianti idraulici</li>
                </ul> 
            </div>


        </div>

    </Layout>
  )
}

export default Servizi;
