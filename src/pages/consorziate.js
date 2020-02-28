import React from "react";
import {Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";
import cartina from "../images/aquamat-consorziate.jpg" 

function ConsorziatePage() {
  
  const data = useStaticQuery(graphql`
        query {
           allPrismicConsorziate{         
              edges {
                    node {
                      id
                      slugs

                      data{
                        regione {
                          text
                        }
                        slug {
                          
                            text
                          
                        }
                       
                        image {
                          url
                          localFile {
                            url
                          }
                        }  
                        body {
                          html
                        }
                       
                      }
                    }  
              
            }
          }  
        }
    `)
  return (
    <Layout >
      <SEO title="Le nostre Consorziate" description="Elenco e descrizione delle nostre Consorziate sul territorio"/>
      <img className="shadow-inner" src={cartina} alt="aquamat regioni consorziate"/>
      <div className="flex flex-wrap">
        { data.allPrismicConsorziate.edges.map((edge) => {
          return (
           
            <div key={edge.node.id} className="w-full md:w-1/3 text-center rounded shadow-lg p-2">
                <img className="w-full h-64 object-contain" src={edge.node.data.image.url} alt={edge.node.data.regione.text}/>
                  <button className=" p-4 py-2 rounded bg-yellow-400 mb-4">
                    <div className="font-bold text-xl text-orange-500 hover:text-orange-700">
                      <Link to={`/consorziate/${edge.node.data.slug.text}`}>{edge.node.data.regione.text}</Link>
                    </div> 
                  </button>
            </div>
          
          )
        })}
      </div>
    </Layout>

  );
}

export default ConsorziatePage;
