import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from 'react-helmet'

const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords}/>
            <meta name="author" content={author} />
        

      </Helmet>

      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps={
  title:'E-commerce',
  description:'mern stack project',
  keywords:'mern,react,node,express,css',
  author:'sarang'
}

export default Layout;
