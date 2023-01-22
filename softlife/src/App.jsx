import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo = {'Cargando productos de SoftLife!'}/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer saludo = {'Cargando productos de SoftLife!'}/>}/>
        <Route path='/detail/:productoId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to='/'/> } />
      </Routes>
    </BrowserRouter>
  )
}
export default App
