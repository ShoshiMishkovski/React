export const decreaseQty=(index)=>({
    
    type:"DECREASE_QTY",
    index
})

export const increaseQty=(index)=>({
    type:"INCREASE_QTY",
    index
})

export const increaseQtyAfterDelete=(index)=>({
    type:"INCREASE_QTY_AFTER_DELETE",
    index,

})