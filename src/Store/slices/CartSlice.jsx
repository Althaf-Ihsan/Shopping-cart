//Create slice
//initailize state
//actions
import { createSlice } from '@reduxjs/toolkit'
const initialCartState=[]
const cartSlice=createSlice({
    name:"cart",
    initialState:initialCartState,
    reducers:{
        addToCart(state,action)
        {
     state.push(action.payload)
        },
        removeCart(state,action){
            return state.filter((item)=>item.id!==action.payload)
        }

    }
})
export const {addToCart,removeCart}=cartSlice.actions;
export default cartSlice.reducer;