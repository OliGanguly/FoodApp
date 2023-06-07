import { useState } from "react";
import logo from "../../Images/logo.png";
//named export
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";

const Header = () =>{
    // const isAuthenticated=()=>{
    // return false
    // }
    const isOnline=useOnline()
    const[isAuthenticated,setIsAuthenticated]=useState(false)
    return <div className="header">
     
       <div className="logo-container">
       <img src={logo} className="logo"/>
       
       </div>
       <div className="nav-items">
       <ul>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/"><li>Home</li></Link>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/about"><li>About</li></Link>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/contact"><li>Contact</li></Link>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/cart"><li>Cart</li></Link>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/instamart"><li>Fast delivery</li></Link>
        </ul>
       </div>
       
      <div className="login-style">
      <span>{isOnline?<span>✅online</span>:<span>🔴offline</span>}</span>
      {isAuthenticated? 
      <button className="logout" onClick={()=>setIsAuthenticated(!isAuthenticated)}>Logout</button>:
      <button className="login"  onClick={()=>setIsAuthenticated(!isAuthenticated)}>Login</button>}
     
      </div>
    </div>
}
export default Header;

