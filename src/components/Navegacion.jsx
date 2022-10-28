import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export function Navegacion(){
    return(
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand>Tienda Deportiva</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to={"/"} as={NavLink}>Lista de Productos</Nav.Link>
        <Nav.Link to={"/modificar"} as={NavLink}>Modificar Productos</Nav.Link>
        <Nav.Link to={"/ventas"} as={NavLink}>Lista Ventas</Nav.Link>
        <Nav.Link to={"/carrito"} as={NavLink}>Carrito Compras</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
  )
}