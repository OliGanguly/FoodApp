import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CON_URL, GET_RESTAURANT_MENU } from '../utils/constants';
import Shimmer from './Shimmer';
import useRestroMenu from '../Hooks/useRestroMenu';


function Restaurant(props) {
    // Dynamic Routing/segment
    //Read a dynamic url param
    const {id}=useParams();
    //custom hooks
    const restaurant= useRestroMenu(id);
  
return restaurant?.length===0?<Shimmer/>:(
    <div className='singlerestro'>     
           <div className='resinfo'>
             <img src={CON_URL+restaurant[0].cloudinaryImageId}/>
           <h3>{restaurant[0].name}</h3>
           <p>{restaurant[0].areaName}-{restaurant.city}</p>
           <p>{restaurant[0]?.cuisines?.join(",")} - {restaurant.costForTwoMessage}</p>
           <h3>{restaurant[0].avgRating} stars</h3>
           </div>
           <div>
            <div className='menu'>
            <h4>Menu</h4>
            {
               restaurant[1]&&restaurant[1].map((item)=>{
                return(
                   <div className='menubody' key={item?.card?.info?.id}>
                    <img className="menuImage" src={CON_URL+item.card.info.imageId}/>
                    <div style={{marginLeft:"10px"}}>{item?.card?.info?.name}</div>
                    <div style={{marginLeft:"10px"}}>Rs. {item?.card?.info?.price/100}</div>
                    </div>
                )
                })
            }
            </div> 
           </div>
        </div>
)
   
}

export default Restaurant;