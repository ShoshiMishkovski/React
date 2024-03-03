import React, { Component } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addQty,decreaseQty } from './productAction';   

const cart = [];

const cartReducer = (state = cart, action) =>{
    // Actions 
    switch(action.type){
        case "add to cart":
           decreaseQty()
            return [...state, action.newProduct]
        case "delete from cart":
            addQty(state, action)
            return state.filter((item, Iindex,Jindex) => Iindex!== action.Iindex&&Jindex!== action.Jindex);
        default:
            return state
    }
}
export default cartReducer