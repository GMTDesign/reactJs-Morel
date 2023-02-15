import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({children}) => {
    
    const [cartItems, setCartItems] = useState([])
    
    const addProduct = (newProduct) =>{
        const index = cartItems.findIndex(product => product.id === newProduct.id)
        if (index !== -1){
            cartItems[index].count += newProduct.count
            setCartItems([...cartItems])
        }else{
            setCartItems([...cartItems, newProduct])
        }
            
        
    }
    
    const totalCount = () => cartItems.reduce((acc, product) => acc += product.count, 0)
    const totalPrice = () => cartItems.reduce((acc, product) => acc += (product.count * product.price), 0)
    
    const removeItem = prodId => setCartItems(cartItems.filter(product => product.id !== prodId))

    const emptyCart =()=>{
        setCartItems([])
    }
    return(
        <CartContext.Provider value ={{
            cartItems,
            addProduct,
            totalCount,
            totalPrice,
            removeItem,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}