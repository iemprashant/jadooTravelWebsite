import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import mainLogo from '../../Assests/Logo.svg';
import styles from './navbar.module.css';
const navbar = () => {
  return (
    <Navbar
      expand="lg"
      className={styles.navbar}
      className="d-flex justify-content-center"
    >
      <Container className="  m-3 mx-lg-5 px-lg-5 pd-0">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home" className={styles.navbarbrand}>
            <img src={mainLogo} alt="fireSpot" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.navbartoggle}
          />
        </Container>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav justify-items-end">
            <Nav className="m-2 align-items-center">
              <Nav.Link href="" className={styles.navbaritem}>
                Destinations
              </Nav.Link>
              <Nav.Link href="" className={styles.navbaritem}>
                Hotels
              </Nav.Link>
              <Nav.Link href="" className={styles.navbaritem}>
                Flights
              </Nav.Link>
              <Nav.Link href="" className={styles.navbaritem}>
                Bookings
              </Nav.Link>
              <Nav.Link href="" className={styles.navbaritem}>
                Login
              </Nav.Link>
              <Nav.Link href="" className={styles.navbaritembutton}>
                Signup
              </Nav.Link>
              <NavDropdown
                className={styles.navbaritem}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/">EN</NavDropdown.Item>
                <NavDropdown.Item href="/">French</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};
export default navbar;
