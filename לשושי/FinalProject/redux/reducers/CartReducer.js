import { useDispatch } from "react-redux"
import { decreaseQty } from "../actions/ProductActions"



const initialState=[]


const CartReducer=(state=initialState, action)=>{
    
    switch(action.type){
        case "DELETE_FROM_CART":
            {
                return state.filter((item, index) => index!== action.index)
            }
        case "ADD_TO_CART":
            {
                // console.log("Adding to cart")
                // const item=state.filter((item)=>item.id==action.newProduct.id)
                // if(item[0]==null){
                //     return [...state, action.newProduct]
                // }
                // const newState=state.filter((item)=>item.id!=action.newProduct.id)

                return [...state, action.newProduct]
                
            }
        default:
            return state
    }
}
export default CartReducer