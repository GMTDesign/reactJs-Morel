import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { app } from './data/firebase';
import CartContainer from './components/container/CartContainer/CartContainer';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={'Cargando productos de SoftLife!'} />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer saludo={'Cargando productos de SoftLife!'} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}
export default App