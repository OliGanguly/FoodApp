import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// score will crete slices
// store should contain slices
const store = configureStore({
reducer:{
    cart:cartSlice
}
});
export default store;
//How to connect my store to my app we need provider, whole apllication
// reducer:{
//     nameOfTheCart:Slice
// }