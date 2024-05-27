import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Productpage = () => {
  let [Product , setproduct] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/category/jewelery').then((res)=>setproduct(res.data))
    .catch((err)=>console.log(err))
  },[])


  return (
    <div>
        <Container>
            <Row className='mt-5 mb-5'>
              <Col lg={3} md={3}>
                <div className="box" style={{border:"2px solid black",height:"100vh", textAlign:"center"}}>
                  <form action="">
                    <p>Age Group</p>
                      <input type="checkbox" /> <span>2-5 yrs (43)</span><br />
                      <input type="checkbox" /> <span>5-8 yrs (111)</span><br />
                      <input type="checkbox" /> <span>8-12 yrs (133)</span><br />
                  </form>
                  <hr />
                  <p>Frame Type</p>
                    <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)"}}>
                      <div style={{border:"1px solid grey" , width:"90px"}}>
                        <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png" alt="" className='img-fluid'/>
                        <p>Full Rim</p>
                      </div>
                      <div style={{border:"1px solid grey" ,width:"90px"}}>
                        <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png" alt="" className='img-fluid' />
                        <p>Half Rim</p>
                      </div>
                      <div style={{border:"1px solid grey",width:"90px"}}>
                        <img src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png" alt="" className='img-fluid'/>
                        <p>Rimless</p>
                      </div>
                    </div>
                </div>
              </Col>


              <Col lg={9} md={9} style={{border:"1px solid red",height:"100vh" , textAlign:"center"}} >
                <h2 style={{textAlign:"center"}}>product add here</h2>

                  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"25px"}}>
                  {Product.map((el)=>
                  <div style={{borderRadius:"10px",height:"350px",overflowX:"auto",boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px 1px"}}>
                     <p>{el.id}</p>
                     <img src={el.image} alt={el.title} height={130} width={150}/> 
                     <b>{el.description}</b>
                     <p>{el.category}</p>
                     <h4>{el.price}</h4>
                     <b>{el.rating.rate}</b>
                  </div>
                )}
                  </div>
              </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Productpage