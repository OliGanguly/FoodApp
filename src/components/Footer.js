import { useContext } from "react"
import userContext from "../context/UserContext";
import userContext from "../context/UserContext"

const Footer = ()=>{
    
const {user}=useContext(userContext)
    return <div className="footer">
    <p>This website is developed by {user.name}-{user.email}</p>
    </div>
}
export default Footer;