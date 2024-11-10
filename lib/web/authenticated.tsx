import { createRoot } from 'react-dom/client';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const container = document.querySelector('main');

createRoot(container!).render(
  <Container>
    <Navbar bg="dark" data-bs-theme="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    </Navbar>
    <Row>
      <Col>WE DID IT</Col>
    </Row>
  </Container>,
);
