import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchProductos } from "../../../data/fetchProductos"
import { Link } from 'react-router-dom'
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {productoId} = useParams()
    useEffect(()=>{
        fetchProductos(productoId)
        .then (respuesta => setProducto(respuesta))
    })
    return (
        <ItemDetail producto={producto} />
    )
}
export default ItemDetailContainer