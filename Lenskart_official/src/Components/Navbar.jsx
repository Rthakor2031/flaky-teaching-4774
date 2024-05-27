import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className="Top-head">
          <div className="img-number">
              <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="" height={70} width={220}/>
              <Link to={"/"} style={{textDecoration:"none"}}>1800-202-4444</Link>
          </div>
          <input type="text" placeholder='What are you looking for?' className='input'/>
          <div className='Tracking'>
            
          <Link to={"/TrackingForm"}>Tracking Order</Link>
          <Link to={"/Form"}>SignIn or SignOut</Link>
        </div>

        <div className='Tracking'>
           <h4><a href=""></a>Tracking Order</h4>
           <h4><a href=""></a>SignIn or SignOut</h4>
           
        </div>
        </div>
    </div>
  )
}

export default Navbar