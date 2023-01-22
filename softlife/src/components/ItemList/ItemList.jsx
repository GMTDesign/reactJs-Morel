import Item from "../Item/Item"

const ItemList = ({productos}) => {    
    return (
        productos.map(producto => <Item key={producto.idProducto} producto={producto} />  
        )
    )
}
export default ItemList