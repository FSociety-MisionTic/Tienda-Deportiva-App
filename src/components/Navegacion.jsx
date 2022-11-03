import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContextoCarroCompras } from '../contexts/ContextoCarroCompras';

export function Navegacion() {

  const rol = localStorage.getItem("rol");

  const contexto = useContextoCarroCompras();

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>FSOCIETY Tienda Deportiva </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to={"/"} as={NavLink}>Lista de Productos</Nav.Link>
          {(rol === "administrador") ? (
            <>
              <Nav.Link to={"/modificar"} as={NavLink}>Modificar Productos</Nav.Link>
              <Nav.Link to={"/ventas"} as={NavLink}>Lista Ventas</Nav.Link>
            </>
          ) : (<Nav.Link to={"/carrito"} as={NavLink}>
              <Badge badgeContent={contexto.getTotalProductos()} color="secondary">
                <ShoppingCartIcon />
              </Badge>&nbsp;
            Carrito Compras
          </Nav.Link>)}
          {(rol) ? (
            <Nav.Link onClick={() => localStorage.removeItem("rol")} to={"/"} as={NavLink}>Salir</Nav.Link>
          ) : (
            <Nav.Link to={"/login"} as={NavLink}>Login</Nav.Link>)}
        </Nav>
      </Container>
    </Navbar>
  )
}