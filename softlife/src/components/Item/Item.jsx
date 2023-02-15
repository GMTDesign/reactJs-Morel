import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
    return (
        <Card key={product.id} className='col-3' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={`/${product.image}`} alt="image"/>
                <Card.Title>Categoría: {product.category}</Card.Title>
                <Card.Text>Código de producto: {product.code}</Card.Text>
                <Card.Text>Precio: {product.price}</Card.Text>
                    
                {product.stock === 0
                                    ? 
                                        <h6>Agotado</h6> 
                                    :
                                        <Link to={`/detail/${product.id}`}>
                                            <Button className='w-50' variant="outline-primary">Ver detalle</Button>
                                        </Link>
                
                }
            </Card.Body>
        </Card>       
    )
}
export default Item