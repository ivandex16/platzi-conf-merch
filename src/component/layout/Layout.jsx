import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Main } from './styles'

const Layout = () => {
  return (
    <Main>
        <Header/>
            <Outlet/>
       <Footer/>
    </Main>
  )
}

export default Layout