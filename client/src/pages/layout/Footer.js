import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{background:'#3a4750',textAlign:'center',color:'white',padding:'16px'}}>
            <h4 >
              All Right Reserver &copy; Sarang
            </h4>
            <p style={{textAlign:'center',margin:'15px',}}>
              <Link style={{textDecoration:'none',color:'white',padding:'10px',hover:''}} to='/about'>About</Link>
              |
              <Link style={{textDecoration:'none',color:'white',padding:'10px'}} to='/contact'>Contact</Link>
              |
              <Link style={{textDecoration:'none',color:'white',padding:'10px',}} to='/policy'>Privacy Policy</Link>
            </p>
        
    </div>
  )
}

export default Footer