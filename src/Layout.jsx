import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import User from './components/User/User'

function layout() {
  return (
    <>
    <Header />
    {/* <User /> */}
    <Outlet />
    <Footer />
    </>
  )
}

export default layout