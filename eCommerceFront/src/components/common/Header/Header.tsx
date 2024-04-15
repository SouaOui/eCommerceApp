import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import '@styles/global.css';
import { Badge, Navbar, Nav, Container} from "react-bootstrap";
import HeaderBasket from '../../ecommerce/HeaderBasket/HeaderBasket';

const {headerContainer, headerLogo} = styles;

const Header = () => {
  return (
      <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}><span >our</span><Badge bg="info">Bazaar</Badge></h1>
        <HeaderBasket/>
        </div>
        <div>
         <Navbar expand="lg" className="bg-body-tertiary"
         bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
            <Nav.Link as={NavLink} to="aboutus">About us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    </header>
  )
}

export default Header
