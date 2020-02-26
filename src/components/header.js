import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import logo from "../images/aquamat-logo.svg" 

function Header() {

  const [isExpanded, toggleExpansion] = React.useState(false);


  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);


  return (
    <header  className="bg-white w-full top-0 z-40 shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-2">
       
          <Link to={"/"}><img class="w-32" src={logo} alt="Logo" /></Link>
         
        
        <button
          className="block md:hidden border border-yellow-400 flex items-center p-2 rounded text-gray-700 hover:text-yellow-400  hover:underline focus:outline-none"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            
            {
              route: `/consorziate`,
              title: `Le Consorziate`
            },
            {
              route: `/servizi`,
              title: `Servizi`
            },
            {
              route: `/uniscitianoi`,
              title: `Unisciti a noi`
            },
            {
              route: `/richiediciunpreventivo`,
              title: `Richiedici un Preventivo`
            },
            {
              route: `/news`,
              title: `News`
            },
            {
              route: `/contatti`,
              title: `Contatti`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 ml-2 font-semibold md:mt-0 md:ml-6 text-gray-700 hover:text-yellow-400 hover:underline"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
