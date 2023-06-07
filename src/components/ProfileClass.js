import React from "react";
// React.Component comes from React
class ProfileClass extends React.Component {
    // to initialize
    constructor(props) {
        super(props);
        console.log("child-constructor")
        // state-react gives access to this.state , its a object
       
        this.state={
            userInfo:{
                login:"Dummy",
                location:"Dummy"
            }
        }
    }
   async componentDidMount(){
        
        const data=await fetch("https://api.github.com/users/OliGanguly");
        const json=await data.json();
        console.log("child data",json)
        this.setState({
          userInfo:json  
        })
        console.log("child-componentDidMount")
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate")
    }
    // render method returns Jsx what ever you return get into Dom
    render() {
        console.log("child-render")
     
        return <>
            {/* <h1>Class Comp name:{this.props.name}</h1> */}
            <img src={this.state.userInfo.avatar_url}/>
            <h1>{this.state.userInfo.login}</h1>
            {/* <button onClick={() => {
                //we do not mutate state directlu
                this.setState({
                    count: this.state.count + 1
                })
            }}>CLICK</button> */}
        </>
    }
}
export default ProfileClass;
/*
Parent constructor
parent render
child constructor
child render
parent com did mount??? why?

It should called child com did mount
but in child com did mount it has some api to call its async
it takes some data to load so it calls parent com did mount
its a async operation so it delays com did mount for child
child data load
child com did mount

setstate trigger so render child with updated data
rerender known as updating
child render -> to render updated data

*/ 


/*

*/

