


export const deleteFromCart = (name, index) => {
    return{
        type: "delete from cart",
        name,
        index
    }
}

export const addToCart = (newProduct,Iindex,Jindex) => {
    return{
        type: "add to cart",
        newProduct,
        Iindex,
        Jindex
    }
}