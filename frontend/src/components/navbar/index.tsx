import { Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'
import "./index.css"

interface Props {

}

export function MainNavbar(props: Props){
    return <Navbar expand="lg" className="gamer">
    <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='navlink'>Főoldal</Nav.Link><br></br>
          <Nav.Link href="#link" className='navlink'>Pop</Nav.Link><br></br>
          <Nav.Link href="#link" className='navlink'>Rock</Nav.Link><br></br>
          <Nav.Link href="#link" className='navlink'>Indie</Nav.Link><br></br>
          <Nav.Link href="#link" className='navlink'>Metál</Nav.Link><br></br>
          <Nav.Link href="#link" className='navlink'>Játék</Nav.Link><br></br>
          <Nav.Link href="#link" className='navlink'>Hip-hop</Nav.Link><br></br>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}