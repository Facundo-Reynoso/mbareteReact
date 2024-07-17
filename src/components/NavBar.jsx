import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>Mbarete</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Galería de fotos</Nav.Link>
              <Nav.Link href="#another-link">Productos en stock</Nav.Link>
              <Nav.Link href="#another-link">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "60px" }}>
        {/* margen para no tapar la parte que sigue del navBar */}
      </div>
    </>
  );
};

export default NavBar;
