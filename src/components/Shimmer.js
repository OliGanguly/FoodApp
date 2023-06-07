import React from 'react';

function Shimmer(props) {
    //So have to create restrolinks with dummy cards
    return (
        <div className="res-container">
            {
                Array(20).fill("").map((e,index)=>
                <div className="shimmerCard" key={index}>
            </div>)
            }
           
      
        </div>
    );
}

export default Shimmer;