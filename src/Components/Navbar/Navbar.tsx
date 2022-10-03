import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export default function NavbarComp() {
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Test App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')} >Products</Nav.Link>
          <Nav.Link onClick={() => navigate('/carts')}>Carts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
