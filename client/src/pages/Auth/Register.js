import React from "react";
import Layout from "../layout/Layout";

const Register = () => {
  return (
    <Layout title="Register - Ecommerce App">
      
       <div style={{width:'100vw',height:"77vh",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#e3f6f5'}}>
        
       <div className="content"  style={{
        
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        minWidth:'250px',
        width:'25%',
        padding:'10px',
        height:'fit-content',
        border: "1px solid lightgray",
        borderRadius: "10px",
        backgroundColor: "#79c2d0",
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        
      }}>
     
        <h2>Register Page</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              
            />
           
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              
            />
           
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPhone"
              
            />
           
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputAddress"
              
            />
           
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
     
    </div>
       </div>
    </Layout>
  );
};

export default Register;
