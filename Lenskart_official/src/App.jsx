import React from 'react'
import Productpage from './Pages/Productpage'
import Description from './Pages/Description' 
import TrackingForm from './Pages/TrackingForm'

function App() {
  return (
    <div>
       <h2 style={{textAlign:"center"}}>Productpage</h2>
      <Productpage/>
      <Description/>
      <TrackingForm/>
    </div>
  )
}

export default App