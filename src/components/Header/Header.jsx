import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="navBar row"
    >
      <Container className="d-flex flex-row">
        <Navbar.Brand href="#home" className="m-1">
          <img
            alt=""
            src="/potion.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end text-center">
          <Nav>
            <Nav.Link href="#">Nosotros</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Filosofia</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
