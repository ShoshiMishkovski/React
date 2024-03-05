import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/CartActions";
import { decreaseQty } from "../redux/actions/ProductActions";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

 



export default function ShopComponent() {
    const products = useSelector((state)=>state.products);
    const cart = useSelector((state)=>state.cart);
    const addItemToCart=(item, index)=>{
        const isFound=cart.find((cartItem)=>cartItem.id===item.id)
        if(!isFound){
            dispatch(addToCart(item))        
        }
        else{
            console.log(isFound)
        }

    }
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const dedignDiv={"display":"flex","flexWrap":"wrap",width:"380px",height:"380px"};
  const card = { width: "650px", "marginRight": "auto", "marginLeft": "auto", "marginBottom": "5px", "borderColor": "gray", "marginTop": "1.5rem" ,height:"550px" };
    return(
        <>
        <button onClick={()=>navigate("/CartComponent")}>Go to cart</button>
        {/* <BrowserRouter><Link to="/CartComponent">Go to cart</Link><Routes><Route exact path="/CartComponent" element={CartComponent}></Route></Routes></BrowserRouter> */}
        {/* <button onClick={()=>navigate("CartComponent")}>Go to cart</button> */}
        <center>
            <div  style={dedignDiv}>
            {products ? products.map((item, index) => (
                <>
                    {/* <br></br> */}
                    <div class="card" style={card}>
                        <center>
                    <img class="card-img-top" src={item.image} alt="Card image cap" style={{width:"200px",height:"200px"}}></img>
                    </center>
                    <div class="card-body">
                        <p class="card-text" style={{color:"black"}}>{item.name}</p>
                        <p class="card-text" style={{color:"black"}}>price: {item.price}$</p>
                        <p class="card-text" style={{color:"black"}}>description: {item.description}</p>
                        <p class="card-text" style={{color:"black"}}>qty: {item.qty}</p>
                        <p class="card-text" style={{color:"black"}}>qtyinCard: {item.qtyInCart}</p>
                        <center>
                       <button onClick={function(event){dispatch(decreaseQty(index));addItemToCart(item,index)}}>Add to cart</button>
                       </center>
                  </div> 
              </div>
                </>
            )) : <div>Products is null</div>}
            </div>
            </center>
       
       
        </>

    )


}


  
  
   