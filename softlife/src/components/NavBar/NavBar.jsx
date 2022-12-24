import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container className="navegacion">
                    <Navbar.Brand href="#home"><img src="/logo_SL.png" alt="empresa"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Sobre Nosotros</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Juegos de Comedor</NavDropdown.Item>
                                <NavDropdown.Item href="#">Juegos de Living</NavDropdown.Item>
                                <NavDropdown.Item href="#">Muebles para Oficinas</NavDropdown.Item>
                                <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Contacto</Nav.Link>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar