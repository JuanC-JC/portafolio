import React, { useEffect, useState } from 'react';
import { Header, Social, Email, Footer } from '@components';
import '../styles/components/layout.scss';


const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

  }, [isLoading]);

  return (
    <>

      <div className="layout">
        <Header />
        <Social />
        <Email />

        <main id='content' className='fillHeight'>
          {children}
          <Footer />
        </main>
      </div>

    </>

  )

}

export default Layout