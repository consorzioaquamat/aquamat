
import React from 'react'
import { graphql } from "gatsby"	
import Layout from "../components/layout";

export const query = graphql`
   query ($slug: String!){
    prismicNews(slugs: { eq: $slug }){

        data{
            
            titolo{
                text
            }
            body{
                html
            }
            
            slug{
                text
            }
            
        }
    }
}`

		
const News = props => {
    
    const {data} = props;

      return (

        <>
        
        <Layout>
            
            <div className="flex m-auto  sm:justify-center w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5">
                <div>
                    <h1 className="text-5xl font-bold text-xl leading-tight">{data.prismicNews.data.titolo.text}</h1>
                    <hr/>
                    <div className="flex py-3 w-full" >
                        <div className="w-5/6 text-gray-700">
                            <p className="text-base uppercase">
                            </p>
                            <p>
                            </p>
                            <p>Km: 20 | Percorrenza: 1,20 </p>
                        </div>
                        <div className="w-1/6 my-auto right-0">
                        <button className="float-right h-12 bg-yellow-400 hover:bg-transparent text-sm sm:text-base text-black hover:text-gray-700 font-semibold items-center px-2 sm:py-2 border border-yellow-400 rounded focus:outline-none">
                                Prenota
                        </button>
                        
                        </div>
                    </div>
                        <hr/>

                    
                    <article className="font-normal text-normal my-8" dangerouslySetInnerHTML={{ __html: data.prismicNews.data.body.html }} />
                    
                  
                    
                </div>

            </div>     
        </Layout>
        </>
    )
}


export default News