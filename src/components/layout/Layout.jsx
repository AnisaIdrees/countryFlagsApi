import React from 'react';
import {Outlet} from 'react-router-dom'
import Header1 from './Header1';
import Footer from '../Footer';
function Layout() {
  return (
<>
<Header1/>
<Outlet/>
<Footer/>
</>


  )
}

export default Layout
