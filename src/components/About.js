import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Profile from './Profile';
import ProfileClass from './ProfileClass';
import { render } from 'react-dom';
import UserContext from "../context/UserContext";


class About extends React.Component{
    constructor(props){
        super(props)
        // console.log("parent-constructor") 
    }
     componentDidMount(){
        // console.log("parent-componentDidMount")
    }
    render(){
        // console.log("parent-render")
        return (
                    <div style={{
                        padding:"10px"
                    }}>
                        
                        {/* ways to render children */}
                        {/* childerns renderd inside outlet which create inside parent and for profile parent is about */}
                        {/* <Outlet/> */}
                        {/* <Profile/> */}
                        <ProfileClass name="Oli class first"/>
                        {/* we dont have useContext hook here in class comp so we use it as a component */}
                        <UserContext.Consumer>
                            {/* takes a jsx then func has value of whatever the value of the context */}
                            {({user})=><p>{user.name}-{user.email}</p>}
                        </UserContext.Consumer>
                        {/* <ProfileClass name="Oli class second"/> */}
                    </div>
                );
    }
}

export default About;
// parent constructor
// parent render
// child constructor
//child render
//child comdidmount
//child componentdidmount
//parent componentdidmount

//if two com
// parent constructor
// parent render
// child 1 constructor
//child 1 render
// child 2 constructor
//child 2 render
//child 1 comdidmount
//child 2 comdidmount
//parent componentdidmount