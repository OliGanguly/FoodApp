import { useEffect, useState } from "react";

const  useRestroMenu= (resid)=>{
  const [restro,setRestro]=useState([])
  const [allcusions,setAllcusions]=useState([])
  //will fetch data for us
  //GET DATA FROM API
  useEffect(()=>{
    getSingleData()
},[])


const getSingleData=async()=>{
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=${resid}&submitAction=ENTER`);
    const res_data = await response.json();
    console.log(res_data.data)
    setRestro(res_data?.data?.cards[0]?.card?.card?.info)
    setAllcusions(res_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
}
return [restro,allcusions];
}
export default useRestroMenu;