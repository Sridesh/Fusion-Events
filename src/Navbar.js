import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import Logo from './images/Logo.jpg' 

const Navbarc = () => {
    return (
        <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="" className="brand">
            {/* <img src={Logo} className='navlogo' width="50" height="50" alt="Logo" />             */}
            <span>Fusion Events</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='navitem'>Home</Nav.Link>
            <Nav.Link href="#action2" className='navitem'>Venues</Nav.Link>
            <Nav.Link href="#action2" className='navitem'>Event Organizers</Nav.Link>
            <Nav.Link href="#action2" className='navitem'>Vendors</Nav.Link>
            <Nav.Link href="#action2" className='navitem'>About</Nav.Link>
            <Nav.Link href="#action2" className='navitem'>Contact Us</Nav.Link>
            {/* <NavDropdown className='navitem' title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{marginRight:'0'}}
            />
            <Button style={{marginLeft:'0'}}variant="outline-success">Search</Button>
          </Form>
          <Button style={{margin:'20px'}}>Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
 
export default Navbarc;