import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
const ItemDetail = ({ product }) => {
  const { addProduct } = useCartContext()
  const [countControl, setCountControl] = useState(true)
  const onAdd = (count) => {
    addProduct({  ...product, count: count })
    setCountControl(false)
  }
  
  
  
  return (
    <div className='container-fluid row'>
      <div className='col-6'>
        <Card key={product.id} className='detalleProd' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={`/${product.image}`} alt="image"/>
            <Card.Title>Categoría: {product.category}</Card.Title>
            <Card.Text>Código de producto: {product.code}</Card.Text>
            <Card.Title>Producto: {product.title}</Card.Title>
            <Card.Text>Precio: {product.price}</Card.Text>
            <Card.Text>Comprando cuatro o más unidades obtiene un 10% de descuento</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='col-6'>
        {countControl ? 
          <ItemCount onAdd={onAdd} />
        :
          <div className='container-fluid col-6'>
            <Link to ="/cart">
              <Button className='w-75 m-2' variant="outline-primary">Ir al carrito</Button>
            </Link>
            <Link to="/">
              <Button className='w-75 m-2' variant="outline-primary">Seguir comprando</Button>
            </Link>
          </div>
        }
        
      </div>
    </div>
  )
}

export default ItemDetail