import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './layout/Layout'

const PageNotFound = () => {
  return (
    <Layout>
        <div className='pnf' style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'65vh'}}>
          <h1 className='pnf-title' style={{fontSize:'100px',fontWeight:'700'}}>404</h1>
          <h2 className='pnf-heading'style={{fontWeight:'500'}}>Oops ! Page Not Found</h2>
          <Link to='/' className='pnf-btn' style={{color:'black',border:'1px solid black',textDecoration:'none',padding:'10px',marginTop:'10px'}}>
            Go Back
          </Link>
        </div>
    </Layout>
  )
}

export default PageNotFound