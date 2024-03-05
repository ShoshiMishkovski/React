import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteFromCart } from "../redux/actions/CartActions";
import { increaseQty, increaseQtyAfterDelete } from "../redux/actions/ProductActions";


 



export default function CartComponent() {

    const cart = useSelector((state)=>state.cart);
    const products = useSelector((state)=>state.products);
    const dispatch=useDispatch()
    // const designCreditCard = { "borderColor": "pink" }
    // const designCredit = { "width": "50px"};
    // const designCard = { "width": "18rem", "marginRight": "8px", "borderColor": "black" };
    const designImg = { "width": "10rem", "marginLeft": "3.5rem" };
    // const designName = { "fontFamily": "monospace", "fontSize": "15px" };
    // const designCart = { "padding": "1rem" };
    // const designGar = { "width": "20px", "height": "20px" };
    // const designBtn = { "marginLeft": "0.1rem" };

    return(
        <>
      <table class="table table-striped">
      <tr><td>name</td><td>image</td><td>price</td><td>qty</td></tr>
            {cart ? cart.map((item, index) => (
                <>
                    <br></br>
                    
                    
                    <tr><td><p style={{color:"black"}}>{item.name}</p></td>
                    <td><img class="card-img-top" src={item.image} style={designImg}></img></td>
                    <td><p style={{color:"black"}}> {item.price}$</p></td>
                    <td><p style={{color:"black"}}><button onClick={function(event){dispatch(increaseQty(index))}}>-</button>{item.qtyInCart}<button>+</button></p></td>
                    <td><button onClick={function(event){dispatch(deleteFromCart(index));dispatch(increaseQtyAfterDelete(index))}}>Delete</button></td>
                    
                    </tr>                       
             
                </>
            )) : <div>cart is null</div>}
       
       </table>
        </>

    )


}

