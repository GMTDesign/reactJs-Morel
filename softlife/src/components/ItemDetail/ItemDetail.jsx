import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({producto}) => {
  const onAdd = (canti) =>{
    console.log(canti)
  }
  return (
    <div className='container-fluid row'>
      <div className='col-6'>
        <Card key={producto.idProducto} className='detalleProd' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Img variant="top" src={`/${producto.imagen}`}/>
            <Card.Title>Categoría: {producto.categoria}</Card.Title>
            <Card.Text>Id del producto: {producto.idProducto}</Card.Text>
            <Card.Title>Producto: {producto.titulo}</Card.Title>
            <Card.Text>Colores: {producto.color1} - {producto.color2}</Card.Text>
            <Card.Text>Precio: {producto.precio}</Card.Text>
            <Card.Text>Comprando dos o más unidades obtiene un 10% de descuento</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='col-6'>
        <ItemCount onAdd={onAdd}/>
      </div>
    </div>  
  )
}

export default ItemDetail