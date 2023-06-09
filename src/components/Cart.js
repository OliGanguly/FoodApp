import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/store';
import { CON_URL } from '../utils/constants';
import { clearCart, removeItem } from '../utils/cartSlice';

function Cart(props) {
    const dispatch=useDispatch()
    //subscribe to cart slice
    const cartItems = useSelector(store=>store.cart.item)
    const [total,setTotal]=useState(0);
    console.log(cartItems)
    useEffect(()=>{
     setTotal(cartItems.reduce((acc,current)=>acc+Number(current?.card?.info?.price/100),0))
    },[cartItems])
    return (
        <div style={{
            display:"flex",
            width:"100%"
        }}>
  <div style={{
   width:"90%",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-evenly"
    }}>
        {
            cartItems.length===0?<p>Cart is Empty</p>:
            cartItems&&cartItems.map((item)=>{
                return(
                   <div className='rescard' key={item?.card?.info?.id}>  
                    <img className="reslogo" src={CON_URL+item.card.info.imageId}/>
                    <h3 style={{marginLeft:"10px"}}>{item?.card?.info?.name}</h3>
                    <p style={{marginLeft:"10px"}}>{item?.card?.info?.description}</p>
                    <h4 style={{marginLeft:"10px"}}>Rs. {item?.card?.info?.price/100}</h4>
                    {/* <button className='logout' onClick={()=>dispatch(removeItem(item?.card?.info?.id))}>Remove</button> */}
                    </div>
                )
                })
        }
  
  </div>
  <div style={{
    display:"flex",
    flexDirection:"column",
    marginTop:"15px"
  }}>
        <span className="title">({cartItems.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <button className='logout' onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </div>
        </div>
    );
}

export default Cart;
