import React from "react";
import {Link, NavLink} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{fontFamily:'Poppins, sans-serif',fontSize:'17px',lineHeight:'26px',textTransform:'uppercase',boxShadow:'0 8px 6px -6px gray',fontWeight:'400 '}}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/' className="navbar-brand" style={{fontWeight:'700',fontFamily:'roboto,sans-serif',letterSpacing:'3px'}} >
               <AiOutlineShoppingCart size={40} style={{marginRight:'10px'}}/>E-Commerce
            </Link >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink  to='/'  className="nav-link " aria-current="page" >
                  Home
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  to='/category'  className="nav-link " aria-current="page" >
                  Category
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  to='/register' className="nav-link" >
                  Register
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  to='/login' className="nav-link" >
                  Login
                </NavLink >
              </li>
              <li className="nav-item">
                <NavLink  to='/cart' className="nav-link" >
                  Cart (0)
                </NavLink >
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
