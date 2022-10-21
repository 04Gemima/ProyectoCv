import { Navbar, Nav, Container } from "react-bootstrap";

import { Outlet, Link } from "react-router-dom";

const NavBarExample = () => {
  return (
    <>
      <Navbar className="p-0 bg-dark v-navbar">
        <Container className="justify-content-center">
          <Navbar id="basic-navbar-nav" className="p-0">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="v-navbar-link text-white-50">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="v-navbar-link text-white-50">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="v-navbar-link text-white-50">
                Acerca de
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>


      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default NavBarExample;
