import { useDispatch, useSelector } from "react-redux"
const lipsticks = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"3", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"4", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Makeup = [{code:"5", name: "Estee Lauder makeup", price: 135, qty:30, image: <img src={img5} ></img>,
 description: "Double wear alabester."},
 {code:"6", name: " Yossi Bitton", price: 120, qty:25, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"7", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"8", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Mascara = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Pencile = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Eyeliner = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Makeup_remover = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]


const Eye_shadow = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Bronzer = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Concealer = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Moisturizer = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Eyebrow_gel = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const Shimmer = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const powder = [{code:"1", name: " SACARA lipstick", price: 35, qty:30, image: <img src={img5} ></img>,
 description: "A delicate and bright ruby with wonderful properties."},
 {code:"2", name: " Mibeline lipstick", price: 32, qty:35, image: <img src={img5} ></img>,
 description: "A lipstick that stands out especially for women who are looking for presence."}
, {code:"2", name: " Esti-Lauder lipstick", price: 60, qty:15, image: <img src={img5} ></img>,
description: "A delicate and bright ruby with wonderful properties."},
{code:"2", name: " Revlon lipstick", price: 29.9, qty:70, image: <img src={img5} ></img>,
description: "A gentile and bright lipstick for Shabbos and Yom Tov"}]

const allStates=[lipsticks,Makeup,Mascara,Pencile,Eye_shadow,Bronzer,Concealer,Moisturizer,Eyebrow_gel,Eyeliner,Shimmer,powder,Makeup_remover] 
 const productsReducer = (state = allStates, action) =>{
    // Actions 
    switch(action.type){
        case "add Qty":
            return [...state, action.newProduct]
        case "decrease Qty":
            return state.filter((item, index) => index!== action.index)
        default:
            return state
    }
}
export default productsReducer