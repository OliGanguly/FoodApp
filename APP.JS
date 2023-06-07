// const header=React.createElement("h1",{},"Oli");
import React from "react";
import  ReactDOM  from "react-dom/client";
// import logo from "./Images/logp.png";
//Top label component return some Jsx code
const Header = () =>{
    return <div className="header">
       <div className="logo-container">
       {/* <img src={logo} className="logo"/> */}
       </div>
       <div className="nav-items">
       <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
       </div>
    </div>
}
const RestroCard=()=>{
    return <div className="rescard">
    <img className="reslogo" src={logo}/>
    <h3>KFC</h3>
    <h4>Name Biriyani</h4>
    <h4>4.4</h4>
    <h4>44 mins</h4>
    </div>
}
const BodyComp = () =>{
    return <div className="body-container">
     <div className="search">search</div>
     <div className="res-container">
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
        <RestroCard/>
       
      {/* Restrocard   */}
     </div>
    </div>
}
const AppLayoutComponent = () =>{
    return <div className="app">
        {/* header */}
        <Header/>
        {/* body */}
        <BodyComp/>
        {/* Footer */}
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayoutComponent/>)