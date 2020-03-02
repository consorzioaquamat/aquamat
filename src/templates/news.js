
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
                 
                    <article className="font-normal text-normal my-8" dangerouslySetInnerHTML={{ __html: data.prismicNews.data.body.html }} />
                    
                </div>

            </div>     
        </Layout>
        </>
    )
}


export default News