import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Link } from 'react-router-dom'
import ItemDetail from "../../ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} = useParams()
    
    useEffect(()=>{
        const database = getFirestore()
        const queryDoc = doc(database, 'products', productId)
        getDoc(queryDoc)
        .then (response => setProduct( {id: response.id, ...response.data()}))
        .catch (error => console.log(error))
        // agregar finally con un loading!!!!!!!!!!!!!
    },[])
    return (
        <ItemDetail product={product} />
    )
}
export default ItemDetailContainer