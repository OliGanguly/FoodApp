import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        item:[],
    },
    reducers:{
        //on addItem action this fun will trigger
        //does not return anything
        addItem:(state,action)=>{
           state.item.push(action.payload)
        },
        removeItem:(state,action)=>{
            console.log(state.item)
            const afterRemove = state.item.filter((item) => item.id !== action.payload);
            console.log(action.payload)
            state.item = afterRemove;
        },
        clearCart:(state)=>{
         state.item=[]
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
//combine all reducers and export it