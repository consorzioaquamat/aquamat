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
      <SEO title="News"/>
      <div className="flex flex-wrap">
           
        { data.allPrismicNews.edges.map((edge) => {

          return (
          <div key={edge.node.id} className="w-full md:w-1/3 rounded shadow-lg m-2">
             <Link to={`/news/${edge.node.data.slug.text}`}><img className="w-full h-auto object-contain" src={edge.node.data.image.url} alt={edge.node.data.titolo.text}/></Link>
         
              <div className="p-4 mb-2">
                <div className="text-xl text-yellow-400 hover:underline">
                  <Link to={`/news/${edge.node.data.slug.text}`}>{edge.node.data.titolo.text}</Link>
                </div>
                <p className="text-xs text-thin text-gray-700">{edge.node.data.sottotitolo.text}</p>
              </div>   
          </div>
      
          )
        })}
      </div>  

    </Layout>
  );
}

export default NewsPage;
