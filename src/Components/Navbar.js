import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Navbar.css";
import SearchBar from "./searchbar";
import { useEffect, useState } from "react";

const Navbarc = () => {
  const [loggedin, setLoggedin] = useState(false);
  useEffect(() => {
    const user_id = localStorage.getItem("ID");
    if (user_id != null) {
      setLoggedin(true);
    }
    console.log("USer ID",user_id)
  }, []);
  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" className="brand">
          {/* <img src={Logo} className='navlogo' width="50" height="50" alt="Logo" />             */}
          <span>Fusion Events</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="navitem">
              Home
            </Nav.Link>
            <Nav.Link href="/venues" className="navitem">
              Venues
            </Nav.Link>
            <Nav.Link href="eventorg" className="navitem">
              Event Organizers
            </Nav.Link>
            <Nav.Link href="vendors" className="navitem">
              Vendors
            </Nav.Link>
            <Nav.Link href="/about" className="navitem">
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="navitem">
              Contact Us
            </Nav.Link>
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
            {loggedin && (
              <Nav.Link href="/event_summary_logged" className="navitem">
                My Event
              </Nav.Link>
            )}
          </Nav>
          <SearchBar />
          <Button style={{ margin: "20px" }} href="/login">
            Login
          </Button>
          {loggedin && (
            <Button style={{ margin: "20px" }} onClick={() => handleLogOut()}>
              LogOut
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarc;
