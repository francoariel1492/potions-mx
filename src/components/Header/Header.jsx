import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css"

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="navBar row"
    >
      <Container className="d-flex flex-row">
        <Navbar.Brand href="#home" className="mx-3">
          <img
            alt=""
            src="/potion.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-3"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-center">
          <Nav>
            <Nav.Link className="navLink" href="#"><span>Nosotros</span></Nav.Link>
            <Nav.Link className="navLink" href="#"><span>Kits</span></Nav.Link>
            <Nav.Link className="navLink" href="#"><span>Contacto</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
