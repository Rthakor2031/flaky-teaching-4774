import React from 'react'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import Product from './Components/product'
import Footer from './Components/Footer'
import Description from './Pages/Description'
import TrackingForm from './Pages/TrackingForm'
import Discription from './Pages/Description'



function App() {
  return (
    <div>
      <Navbar/> total 7 navlink set on the navbar with Routes Route
      <Content/>
      <Product/>
      <Description/>
      <Footer/>
      <TrackingForm/>
            <Discription/>
      <h3>
        Tracking page,<br />
        Authenication form , <br />
        Product will add and open this Whislist form,<br />
        product buy and another form page open...,
      </h3>
    </div>
  )
}

export default App