import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductos } from '../../../data/fetchProductos'
import ItemList from '../../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoriaId} = useParams()
    
    useEffect(() => {
        if (categoriaId){
            fetchProductos()
            .then(respuesta => {
                setProductos(respuesta.filter(produc => produc.categoria === categoriaId))
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } else {
            fetchProductos()
            .then(respuesta => {
                setProductos(respuesta)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    }, [categoriaId])
    return (
        <div className='container-fluid row g-3 m-3'>
            {loading
                ?
                    <h2 className='saludo'>{saludo}</h2>
                :
                    <ItemList productos={productos} />
            }
        </div>
    )
}
export default ItemListContainer