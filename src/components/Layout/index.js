import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';
import Walking from '../Walking';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Walking />
      </main>
      <Footer />
    </>
  )
}

export default Layout;