import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import Walking from '../Walking';
import Services from '../Services';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Walking />
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default Layout;