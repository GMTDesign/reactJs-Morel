import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const ItemCount = ( { initial=1, stock=15, onAdd}) => {
    const [contador, setContador] = useState(initial)
    const manejoSuma = () =>{
        if (contador < stock){
            setContador(contador + 1)
        }
    }
    const manejoResta = () =>{
        if (contador > initial){
            setContador(contador - 1)
        }
    }
    const manejoOnAdd = () =>{
        onAdd(contador)
    }
    return(
        <div className='container-fluid col-6'>
            <div>
                <Button variant="outline-primary m-2 w-25" onClick={manejoSuma}>+</Button>
                <label>{contador}</label>
                <Button variant="outline-primary m-2 w-25" onClick={manejoResta}>-</Button>
            <Button variant="outline-primary m-2 w-250" onClick={manejoOnAdd}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}
export default ItemCount