import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({producto}) => {
    return (
        <Card  key={producto.idProducto} className='col-3' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={`/${producto.imagen}`}/>
                <Card.Title>Categoría: {producto.categoria}</Card.Title>
                <Card.Text>Precio: {producto.precio}</Card.Text>
                <Link to={`/detail/${producto.idProducto}`}>
                    <Button className='w-100' variant="primary">Ver detalle</Button>
                </Link>
            </Card.Body>
        </Card>       
    )
}
export default Item