import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '../../Api/services/Auth';

export default function NavbarComp() {
  const navigate = useNavigate()

  const logout = () => {
    logoutApi().then(() => navigate('/'))
  }


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Test App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/products')} >Products</Nav.Link>
          <Nav.Link onClick={() => navigate('/carts')}>Carts</Nav.Link>
        </Nav>
        <Nav>

          <Nav.Link>Welcome: </Nav.Link>
          <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
