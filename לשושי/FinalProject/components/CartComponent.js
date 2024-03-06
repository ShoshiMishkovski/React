import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteFromCart } from "../redux/actions/CartActions";
import { decreaseQty, increaseQty, increaseQtyAfterDelete } from "../redux/actions/ProductActions";
import garbage from "../redux/images/פח.png"
import { Link } from "react-router-dom";
import { useState } from "react";

 



export default function CartComponent() {

    const cart = useSelector((state)=>state.cart);
    const products = useSelector((state)=>state.products);
    const dispatch=useDispatch()
    const designImg = { "width": "10rem", "marginLeft": "3.5rem" };
    
    const decreaseQtyFromCart=(index,id)=>{
        const qtyInCart=cart.find((cartItem)=>cartItem.id===id).qtyInCart
        if(qtyInCart>1){
            dispatch(increaseQty(index,id));     
        }
        else{
            if(qtyInCart===1)
            {
                dispatch(increaseQty(index,id));    
                dispatch(deleteFromCart(index))
            }  
        }
    }


    const increaseQtyInCart=(index,id)=>{
        const qtyInCart=cart.find((cartItem)=>cartItem.id===id).qtyInCart
        if(products.find((cartItem)=>cartItem.id===id).qty>0){
           dispatch(decreaseQty(index,id));     
        }
        else{
            alert("no more left")
            console.log("no more left")
        }
    }

    const increaseQtyAfterDelete=(index,id)=>{
        const qtyInCart=cart.find((cartItem)=>cartItem.id===id).qtyInCart
        products.find((cartItem)=>cartItem.id===id).qtyInCart=0
        products.find((cartItem)=>cartItem.id===id).qty+=qtyInCart    
    }

    const checkIfReadyToPay=()=>{
      return    <Link to="/PaymentComponent" >Go to payment</Link>
    }
    // const [countItemsInCart, setCountItemsInCart]=useState(0)
    return(
        <>
      <table class="table table-striped">
      <tr><td>name</td><td>image</td><td>price</td><td>qty</td></tr>
            {cart ? cart.map((item, index) => (
                <>
                    <br></br>
                        <tr onChange={checkIfReadyToPay()}><td><p style={{color:"black"}}>{item.name}</p></td>
                            <td><img class="card-img-top" src={item.image} style={designImg}></img></td>
                            <td><p style={{color:"black"}}> {item.price}$</p></td>
                            <td><p style={{color:"black"}}><button onClick={function(event){decreaseQtyFromCart(index,item.id)}}>-</button>{item.qtyInCart}<button onClick={function(event){increaseQtyInCart(index,item.id)}}>+</button></p></td>
                            <td><button onClick={function(event){dispatch(deleteFromCart(index));increaseQtyAfterDelete(index,item.id)}}><img src={garbage} style={{width:"100px"}}></img></button></td>
                        </tr>                       
               </>
            )) : <div>cart is null</div>}
       </table>
       <h4>Number of products in your cart:</h4>
       <Link to="/PaymentComponent">Go to payment</Link>

{/*        
       <h5>{cart.count}</h5>
       {cart ? cart.map((item.qtyInCart) => (
            countItemsInCart+=item.qtyInCart
       ))} */}
    {/* {cart.map(function(item, index) {   
        debugger
        setCountItemsInCart(countItemsInCart+1)
    //        return (
    //     <div>
    //       Applicant name:  {item.qtyInCart}
    //     </div>
    //   )
    })}  */}
        </>
    )
}

