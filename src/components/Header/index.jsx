import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './index.css';

function Header() {
  return (
    <header className="mb-3">
      <Navbar sticky="top" expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img src="./assets/images/icons/favicon-32x32.png" alt="WM" width="32" height="32" className="d-inline-block align-text-top" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="btn btn-outline-light" to="/">Home</Nav.Link>
              <Nav.Link as={Link} className="btn btn-outline-light" to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} className="btn btn-outline-light" to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;