import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, NavLink } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container className="navegacion" >
                    <NavLink to="/"><img src="/logo_SL.png" alt="empresa" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/categoria/comedor">Juegos de Comedor</NavLink>
                            <NavLink to="/categoria/living">Juegos de Living</NavLink>
                            <NavLink to="/categoria/oficina">Muebles para Oficinas</NavLink>
                            <NavLink to="/categoria/accesorio">Accesorios</NavLink>
                            <Link to="/cart">
                                <CartWidget />
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar