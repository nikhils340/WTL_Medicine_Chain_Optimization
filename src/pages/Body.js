import React from 'react'
import { Link } from 'react-router-dom'
import heroimg from "../assets/hero_image.png"
import "./Body.css"
const Body = () => {
  return (
    <>
    
    <div className='hero'>
      <div className="heroimage"><img src={heroimg} alt="" /></div>
      <div className='content'>
        <div className='title'>THE MED PORTAL</div>
        <Link to="/login" className='btn'>GET STARTED</Link> 
      </div>
    </div>

    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>01</h2>
            <h3>CREATE DIGITAL PRESCRIPTION</h3>
            <p>Doctors can create digital prescription to save patient records online</p>
            <a href="#">More -></a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>02</h2>
            <h3>ORDER PLACING</h3>
            <p>Through the prescriptions, order can be directly placed through our website</p>
            <a href="#">More -></a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2>03</h2>
            <h3>MANAGEMENT OF MEDICAL STOCK</h3>
            <p>Digital tracking and management of medical stock, providing real-time updates on expiration dates,etc</p>
            <a href="#"> More -></a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Body