import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/aquamat-logo.svg" 

function Success() {
  return (

    <Layout>
      {/* <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      /> */}
      <section className="flex flex-wrap  p-auto mx-auto pt-32 w-10/12 lg:w-2/3 md:w-2/3 sm:w-4/5 h-screen">
        <div className="w-full">
            <h2 className=" text-4xl font-bold text-gray-700">
                Grazie per averci contattato, la ricontatteremo al più presto.
            </h2>
            <img className="md:w-1/2" src={logo} alt="aquamat logo"/>
        </div>
      </section>
    </Layout>
 
  );
}

export default Success;
