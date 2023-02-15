import { useCartContext } from '../../context/CartContext'
import CartContainer from '../container/CartContainer/CartContainer'
import './CartWidget.css'
const CartWidget = () =>{
    const {totalCount} = useCartContext()
    return(
        <div>
           
            <img className="cart" src="/carrito.png" alt="cart"/> 
            {totalCount() !== 0 && totalCount()}       
        </div>
        
        
    )
}
export default CartWidget