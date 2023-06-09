import { useContext, useEffect, useState } from "react";
import { GET_RESTAURANTS_LIST, resList } from "../utils/constants";
import RestroCard from "./RestroCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../Hooks/useOnline";
import UserContext from "../context/UserContext";

// import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestros, setAllRestaurants] = useState([]);
  const [filterRestros, setFilteredRestaurants] = useState([]);
  const [searchedRes, setSearchedRes] = useState("")
  const {user,setUser}=useContext(UserContext);
  useEffect(() => {
    getRestaurants()
  }, []);

  const getRestaurants = async () => {
    try {
      /* Live Data */
      //await for data to come
      const response = await fetch(GET_RESTAURANTS_LIST);
      //convert readable stream to json
      const res_data = await response.json();
      //optional chaining
      setAllRestaurants(res_data?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(res_data?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  };
 //How will i get to know I am online or offline
 //useOnline returns you r online or offline
const isonline=useOnline();
if(!isonline){
  return <h4 style={{color:'red'}}>🔴Check your internet connection!</h4>
}

 return allRestros?.length===0?<Shimmer/>:(
<div className="body-container">
    <div className="body-func-container">
      <div className="search">
        <input
          className="searchTextbox"
          type="text"
          placeholder="Filter Out Restaurant 🔍"
          value={searchedRes}
          onChange={(e) => {
            setSearchedRes(e.target.value)
            const data=filterData(e.target.value,allRestros)
            setFilteredRestaurants(data)
          }}
        />
         <input
          className="searchTextbox"
          type="text"
          placeholder="Filter Out Restaurant 🔍"
          value={user.name}
          onChange={(e)=>{
            setUser({
              ...user,
              name:e.target.value
            })
          }}
          
        />
        
      </div>

      <p className="top-button" onClick={() => {
        const data = filterRestros.filter(item => item.data.avgRating > 4)
        setFilteredRestaurants(data)
      }
      }> 🔝Top Rated restaurant</p>
    </div>
    
{
  !filterRestros?<Shimmer/>:
  <div className="res-container">
      {
        filterRestros.length===0
        ?
        <h1>No Data Found</h1>
        :
        filterRestros.map((restaurant) => (
          <RestroCard
            key={restaurant.data.id}
            resData={restaurant} />
        ))
      }
      {/* Restrocard   */}
    </div>
}

    
  </div>
 )

 
}
export default Body;