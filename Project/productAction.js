export const  decreaseQty = (name, Iindex,Jindex) => {
    return{
        type: "decrease Qty",
        name,
        Iindex,
        Jindex
    }
}

export const addQty = (newProduct) => {
    return{
        type: "add Qty",
        newProduct,

    }
}