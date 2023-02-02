import React from "react";
import Layout from "../layout/Layout";

const Register = () => {
  return (
    <Layout title="Register - Ecommerce App">
      {/* <div
        className="register"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          flexDirection: "column",
        }}
      >
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div> */}
       <div style={{width:'100vw',height:"77vh",display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'#e3f6f5'}}>
       <div className="content"  style={{
        
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'40%',
        padding:'0 auto',
        height:'fit-content',
        border: "1px solid lightgray",
        borderRadius: "10px",
        backgroundColor: "#79c2d0",
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        
      }}>
      <form style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',padding:'0 20px'}}>
        
        <div style={{display:'flex',flexDirection:'column',marginBottom:'20px',justifyContent:'center',width:'100%',alignItems:'center'}}>
            <label htmlFor="name" style={{fontSize:'18px',fontWeight:'400',display:'flex',}}>Name:</label>
            <input type="text" placeholder="Enter name..." style={{marginTop:'5px',width:'80%',height:'40px',border:'none',borderRadius:'5px',padding:'10px',outline:'none'}} />
        </div>

        <div style={{display:'flex',flexDirection:'column',marginBottom:'20px',justifyContent:'center',width:'100%',alignItems:'center'}}>
            <label htmlFor="name" style={{fontSize:'18px',fontWeight:'400'}}>Email:</label>
            <input type="text" placeholder="Enter email..."  style={{marginTop:'5px',width:'80%',height:'40px',border:'none',borderRadius:'5px',padding:'10px',outline:'none'}}  />
        </div>

        <div style={{display:'flex',flexDirection:'column',marginBottom:'20px',justifyContent:'center',width:'100%',alignItems:'center'}}>
            <label htmlFor="name" style={{fontSize:'18px',fontWeight:'400'}}>Password:</label>
            <input type="password" placeholder="Enter password..."  style={{marginTop:'5px',width:'80%',height:'40px',border:'none',borderRadius:'5px',padding:'10px',outline:'none'}} />
        </div>

        <div style={{display:'flex',flexDirection:'column',marginBottom:'20px',justifyContent:'center',width:'100%',alignItems:'center'}}>
            <label htmlFor="name" style={{fontSize:'18px',fontWeight:'400'}}>Address:</label>
            <input type="text" placeholder="Enter address..."  style={{marginTop:'5px',width:'80%',height:'40px',border:'none',borderRadius:'5px',padding:'10px',outline:'none'}}  />
        </div>

        <div style={{display:'flex',flexDirection:'column',marginBottom:'20px',justifyContent:'center',width:'100%',alignItems:'center'}}>
            <label htmlFor="name" style={{fontSize:'18px',fontWeight:'400'}}>Phone:</label>
            <input type="text" placeholder="Enter phone number..."  style={{marginTop:'5px',width:'80%',height:'40px',border:'none',borderRadius:'5px',padding:'10px',outline:'none'}}  />
        </div>
      </form>
    </div>
       </div>
    </Layout>
  );
};

export default Register;
