import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import "./index.css"

interface Props {

}

export function MainNavbar(props: Props){
    return <Navbar expand="lg" className="gamer">
    <Container>
      <Navbar.Brand href="#home">Lorem ipsum</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Főoldal</Nav.Link>
          <h2>Műfajok</h2>
          <Nav.Link href="#link"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}