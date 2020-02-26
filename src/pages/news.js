import React from "react";
import {Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout";
import SEO from "../components/seo";

function NewsPage() {
  
  const data = useStaticQuery(graphql`
        query {
           allPrismicNews{
            
              edges {
                    node {
                      id
                      slugs

                      data{
                        titolo {
                          text
                        }

                        sottotitolo {
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
      {/* <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="Home"/> */}
           
        { data.allPrismicNews.edges.map((edge) => {

          return (
          <div key={edge.node.id} className="w-full md:w-1/3 rounded shadow-lg">
            <img className="w-full h-64 object-contain" src={edge.node.data.image.url} alt={edge.node.data.titolo.text}/>
         
              <div className="p-4 mb-2">
                <div className="text-xl text-gray-700">
                  <Link to={`/news/${edge.node.data.slug.text}`}>{edge.node.data.titolo.text}</Link>
                </div>
                <p className="text-xs text-thin text-gray-700">{edge.node.data.sottotitolo.text}</p>
              </div>   
          </div>
      
          )
        })}

    </Layout>
  );
}

export default NewsPage;
