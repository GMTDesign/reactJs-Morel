import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext"




const CartContainer = () => {
  const { cartItems, totalPrice, removeItem, emptyCart } = useCartContext()
  const [infoForm, setInfoForm] = useState({
    name: '',
    phone: '',
    email: '',
    emailConfirm: ''
  })
  const [completeForm, setCompleteForm] = useState(false)
  //creación de la orden de compra
  const createOrder = (e) => {
      e.preventDefault()
      const newOrder = {}
      newOrder.buyer = infoForm
      newOrder.items = cartItems.map(({ id, title, price }) => ({ id, title, price }))
      newOrder.total = totalPrice()
      const dataBase = getFirestore()
      // alta de orden en colección orders
      const addOrder = async () => {
        const queryCollection = collection(dataBase, 'orders')
        await addDoc(queryCollection, newOrder)
          .then(response => console.log(response))
          .catch(error => console.log(error))
      }
      addOrder()
      // actualización del stock
      const updateStock = () => {
        cartItems.map(item => {
          const newStock = item.stock - item.count
          const queryDocUpdate = doc(dataBase, 'products', item.id)
          updateDoc(queryDocUpdate, {
            stock: newStock
          })
        })
      }
      updateStock()
  }
  const formHandle = (e) => {
    setInfoForm({
      ...infoForm,
      [e.target.name]: e.target.value
    })
    if (infoForm.name !== "" && infoForm.phone !== "" && infoForm.email !== "" && infoForm.email === infoForm.emailConfirm) {
      setCompleteForm(true)
    }    
  }
  return (
    <div>
      {cartItems.map(product => <Card key={product.id} className='detalleProd' style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img variant="top" src={`/${product.image}`} alt="image" />
          <Card.Text>Código de producto: {product.code}</Card.Text>
          <Card.Title>Producto: {product.title}</Card.Title>
          <Card.Text>Precio: {product.price}</Card.Text>
          <Card.Text>Cantidad: {product.count}</Card.Text>
          {product.count > 3
            ?
            <Card.Text>Subtotal con descuento: {product.count * product.price * 0.9}</Card.Text>
            :
            <Card.Text>Subtotal: {product.count * product.price}</Card.Text>
          }
        </Card.Body>
        <Card.Footer>
          <Button className='w-25' variant="primary" onClick={() => removeItem(product.id)}>X</Button>
        </Card.Footer>
      </Card>
      )}
      {totalPrice() !== 0 ?
        <div>
          <h3 className="d-flex justify-content-center m-5">Total compra: {totalPrice()}</h3>

          <form className="container-fluid col-6">
            <label>Ingrese su nombre y apellido</label><br />
            <input
              type="text"
              name="name"
              placeholder="nombre y apellido"
              value={infoForm.name}
              onChange={formHandle}
            /><br />
            <label>Ingrese su teléfono</label><br />
            <input
              type="text"
              name="phone"
              placeholder="teléfono"
              value={infoForm.phone}
              onChange={formHandle}
            /><br />
            <label>Ingrese su email</label><br />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={infoForm.email}
              onChange={formHandle}
            /><br />
            <label>Confirme su email</label><br />
            <input
              type="email"
              name="emailConfirm"
              placeholder="confirme el email"
              value={infoForm.emailConfirm}
              onChange={formHandle}
            /><br />
          
          </form>
          {(completeForm) ?
            <div> 
              <Button className="m-3 w-25" variant="outline-success" type="submit" onClick={createOrder}>Generar orden de compra</Button>
            </div>
          :
            <Button className="m-3 w-25" variant="outline-warning" type="submit" disabled>Generar orden de compra</Button>
          }
          <Button className='w-5 m-5' variant="outline-secondary" onClick={emptyCart}>Vaciar carrito</Button>            
          
        </div>
      :
        <div>
          <h3>No hay productos en el carrito</h3>
          <Link to="/">
            <Button className='w-5' variant="outline-primary" onClick={emptyCart}>Volver a Home</Button>
          </Link>


        </div>
      }
    </div>
  )
}

export default CartContainer