import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navegacion } from './components/Navegacion';
import { CarritoCompras } from './pages/CarritoCompras';
import { ListaProductos } from './pages/ListaProductos';
import { ListaVentas } from './pages/ListaVentas';
import { Login } from './pages/Login';
import { ModificarProductos } from './pages/ModificarProductos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <>
            <Navegacion />
            <Login />
          </>
        } />
        <Route path="/" element={
          <>
            <Navegacion />
            <ListaProductos />
          </>
        } />
        <Route path="/modificar" element={
          <>
            <Navegacion />
            <ModificarProductos />
          </>
        } />
        <Route path="/ventas" element={
          <>
            <Navegacion />
            <ListaVentas />
          </>
        } />
        <Route path="/carrito" element={
          <>
            <Navegacion />
            <CarritoCompras />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
