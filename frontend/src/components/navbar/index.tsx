import { Navbar, Container, Nav} from 'react-bootstrap'
import "./index.css"
import { useSelector, useDispatch } from 'react-redux'
import { FrameState } from '../../types'
import { updateFrameState } from '../../store'
interface Props {

}



export function MainNavbar(props: Props){
  const frameState = useSelector((state: FrameState) => state.frameState);
  const dispatch = useDispatch();

  function FrameUpdate(selectedFrame: string){
    dispatch(updateFrameState(selectedFrame));
  }

    return <Navbar expand="lg" className="gamer">
    <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='navlink'>Főoldal</Nav.Link><br/>
          <Nav.Link onClick = {() => FrameUpdate("genre_teszt1")} className='navlink'>Pop</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("genre_teszt2")} className='navlink'>Rock</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("genre_teszt3")} className='navlink'>Indie</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("metal")} className='navlink'>Metál</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("jatek")} className='navlink'>Játék</Nav.Link><br></br>
          <Nav.Link onClick = {() => FrameUpdate("hip-hop")} className='navlink'>Hip-hop</Nav.Link><br></br>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}