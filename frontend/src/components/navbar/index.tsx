import { Navbar, Container, Nav} from 'react-bootstrap'
import "./index.css"
import { useSelector, useDispatch } from 'react-redux'
import { FrameState } from '../../types'
import { updateFrameState } from '../../store'
interface Props {

}



export function MainNavbar(props: Props){
  const dispatch = useDispatch();

  function FrameUpdate(selectedFrame: string){
    dispatch(updateFrameState(selectedFrame));
  }

    return <Navbar expand="lg" className="gamer">
    <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='navlink'>Főoldal</Nav.Link><br/>
          <Nav.Link onClick = {() => FrameUpdate("Pop")} className='navlink pop'>Pop</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("Rock")} className='navlink rock'>Rock</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("Indie")} className='navlink indie'>Indie</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("Metal")} className='navlink metal'>Metál</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("Jatek")} className='navlink jatek'>Játék</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("Hip-hop")} className='navlink hiphop'>Hip-hop</Nav.Link><br></br>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}