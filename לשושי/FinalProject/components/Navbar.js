import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutComponent from "./AboutComponent";


import ShopComponent from "./ShopComponent";
import CartComponent from "./CartComponent";



export default function Navbar() {
    return (
        <>
      
                <Link to="/AboutComponent">About</Link>
                <Link to="/ShopComponent">Shop</Link>
                {/* <Link to="/about">About</Link> */}

                <Routes>
                    <Route path="/ShopComponent" element={<ShopComponent></ShopComponent>} />
                    <Route path="/CartComponent" element={<CartComponent></CartComponent>}/>
                    <Route path="/AboutComponent" element={<AboutComponent></AboutComponent>} />
                 
                    {/* <Route path="/about" element={<About></About>} /> */}
                </Routes>
        
        </>
    )
}