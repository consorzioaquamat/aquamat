import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

function ContattiPage() {
  return (
    <Layout> 
       <SEO title="Contatti"/>
    <div class="flex flex-wrap bg-white rounded w-full min-h-screen ">
     
      <div className="p-4 w-full md:w-1/3 text-gray-700"> 
          <div className="font-bold text-xl mb-2">AQUAMAT Consorzio</div>
          <div className="text-base">Via Bedosti 21 </div>
          <div> 61122 Pesaro (PU) </div>
          <div>Tel/Fax +39 0721 22882</div>
          <div className="mt-2 text-gray-500">Customer Service</div>
          <div className="text-yellow-400 hover:underline">info@aquamat.it.</div>
      </div>
 
      <div className="w-full md:w-2/3" >
	    	<iframe className="w-full h-screen md:pb-64" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.815691795563!2d12.860901315100646!3d43.901083844384694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d1e9cca94df49%3A0x804c764334f8fe11!2sVia%20B.%20Bedosti%2C%2021%2C%2061122%20Pesaro%20PU!5e0!3m2!1sen!2sit!4v1582677166188!5m2!1sen!2sit" frameborder="0" allowfullscreen=""></iframe>
      </div>

    </div>
 
    </Layout>

  );
}

export default ContattiPage;
