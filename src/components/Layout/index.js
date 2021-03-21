import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Hero from '../Hero';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

export default Layout;