import React from 'react'
import AppNavBar from './AppNavBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <AppNavBar />
            {children}
        <Footer />
    </>
  )
}

export default Layout