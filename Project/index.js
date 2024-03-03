import { combineReducers } from "redux";

import productsReducer from "./productReducer";

const allReducers = combineReducers({
   
    products: productsReducer
})                                                                                             

export default allReducers