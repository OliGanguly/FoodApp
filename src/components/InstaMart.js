import React, { useState } from 'react';
const Section=({title,description,isVisible,setIsVisible})=>{
    // const [isVisible,setIsVisible]=useState(false)
    return <div className='AccordianBox'>
       <h3>{title}</h3>
       
       {
        isVisible?<>
        <p>{description}</p>
        {/* <button className='hide' onClick={()=>{
            // console.log("isVisible",!isVisible)
            setIsVisible(!isVisible)}}>Hide</button> */}
        </>
        
        :
        <button className='show' onClick={()=>setIsVisible(true)}>Show</button>
       }
    </div>
}

function InstaMart(props) {
    const [sectionConfig,setSectionConfig]=useState("about")
    return (
        <div>
        <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
        }}>
            <h1>lots of component in it    
            </h1>
            <h3>Example of lazy loading</h3>
        </div>
        <div>
            <h3>Example of collapsible Accordian</h3>
            <Section 
            title={"About"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            isVisible={sectionConfig==="about"}
            setIsVisible={()=>setSectionConfig("about")}
            />
             <Section 
            title={"Produce"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            isVisible={sectionConfig==="product"}
            setIsVisible={()=>setSectionConfig("product")}
            />
              <Section 
            title={"Team"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            isVisible={sectionConfig==="team"}
            setIsVisible={()=>setSectionConfig("team")}
            />
            <Section 
            title={"Career"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            isVisible={sectionConfig==="career"}
            setIsVisible={()=>setSectionConfig("career")}
            />
        </div>
        </div>
        
    );
}

export default InstaMart;