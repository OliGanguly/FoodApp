import { useContext, useState } from "react";
import logo from "../../Images/logo.png";
//named export
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import userContext from "../context/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";



const Header = () =>{
  const {user}=useContext(userContext);
    // const isAuthenticated=()=>{
    // return false
    // }
    const isOnline=useOnline()
    const[isAuthenticated,setIsAuthenticated]=useState(false)
    const cartItems = useSelector(store=>store.cart.item)
    
    return <div className="header">
     
       <div className="logo-container">
       <img src={logo} className="logo"/>
       </div>
       <div className="nav-items">
       <ul>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/"><li>Home</li></Link>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/about"><li>About</li></Link>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/contact"><li>Contact</li></Link>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/cart"><li>Cart-<span style={{color:'red'}}>{cartItems.length}</span></li></Link>
        <Link style={{textDecoration:"none",marginRight:"10px"}} to="/instamart"><li>Fast delivery</li></Link>
        </ul>
       </div>
       
      <div className="login-style">
      <span>{isOnline?<span>{user.name}✅</span>:<span>{user.name}🔴</span>}</span>
      {isAuthenticated? 
      <button className="logout" onClick={()=>setIsAuthenticated(!isAuthenticated)}>Logout</button>:
      <button className="login"  onClick={()=>setIsAuthenticated(!isAuthenticated)}>Login</button>}
     
      </div>
    </div>
}
export default Header;

