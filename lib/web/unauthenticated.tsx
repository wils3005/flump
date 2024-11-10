import { createRoot } from 'react-dom/client';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const container = document.querySelector('main');

createRoot(container!).render(
  <Container>
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/login/microsoft">Login</Nav.Link>
      </Nav>
    </Navbar>
    <Row>
      <Col>I AM NOT CURRENTLY LOGGED IN</Col>
    </Row>
  </Container>,
);
