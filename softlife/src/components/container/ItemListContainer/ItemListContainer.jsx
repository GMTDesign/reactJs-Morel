import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../../ItemList/ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    useEffect (()=>{
        const querys = async () => {
            const dataBase = getFirestore()
            const queryCollection = collection(dataBase, 'products')
            const queryCategoryFilter= categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection
            await getDocs(queryCategoryFilter) 
            .then(response =>{
                setProducts(response.docs.map(product => ({id: product.id, ...product.data()})))
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
    
        }
        querys()
    },[categoryId])

    return (
        <div className='container-fluid row g-3 m-3'>
            {loading
                ?
                    <h2 className='saludo'>{saludo}</h2>
                :
                    <ItemList products={products} />
            }
        </div>
    )
}
export default ItemListContainer