import { createContext } from "react";

//createContext is a function
const UserContext = createContext({
user:{
    name:"Dummy name",
    email:"Dummy Email"
}
})
export default UserContext;