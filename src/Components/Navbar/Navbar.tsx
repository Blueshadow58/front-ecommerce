// import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '../../Api/services/Auth';
// import { AuthContext } from '../../Context/AuthContext';
import Cookies from 'universal-cookie'
export default function NavbarComp() {
  const navigate = useNavigate()
  // const { auth }: any = useContext(AuthContext)
  const cookie = new Cookies();

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

          <Nav.Link>{`Welcome: ${cookie.get('user')?.name}`} </Nav.Link>
          <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
