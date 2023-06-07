import { useNavigate } from "react-router-dom";
import { CON_URL } from "../utils/constants";

const RestroCard=(props)=>{
    const navigate=useNavigate()
    const {resData}=props;
    const {id,name,cloudinaryImageId,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data;
    return <div 
    onClick={()=>navigate(`/restaurant/${id}`)}
    className="rescard">
    <img className="reslogo" 
    src={CON_URL+cloudinaryImageId}
    />
    <h4>{name}</h4>
    <p className="wrapciisine">{cuisines.join(",")}</p>
    <p>{costForTwo/100} FOR TWO</p>
    <h4>{avgRating?avgRating:"N/A"}</h4>
    <p> {deliveryTime} mins</p> 
    </div>
}
export default RestroCard;