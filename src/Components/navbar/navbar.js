import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import mainLogo from '../../Assests/Logo.svg';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
const navbar = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container className=" mt-3 p-0  m-mb-3 mx-lg-5 px-lg-5 ">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand as={Link} to="/" className={styles.navbarbrand}>
            <img src={mainLogo} alt="fireSpot" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.navbartoggle}
          />
        </Container>
        <Container>
          <Navbar.Collapse
            id="basic-navbar-nav justify-items-end"
            className={styles.navbarcollapse}
          >
            <Nav className="m-2  align-items-center">
              <Nav.Link
                as={Link}
                to="/destinations"
                className={styles.navbaritem}
              >
                Destinations
              </Nav.Link>
              <Nav.Link as={Link} to="/hotels" className={styles.navbaritem}>
                Hotels
              </Nav.Link>
              <Nav.Link as={Link} to="/flights" className={styles.navbaritem}>
                Flights
              </Nav.Link>
              <Nav.Link as={Link} to="/booking" className={styles.navbaritem}>
                Bookings
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className={styles.navbaritem}>
                Login
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/signup"
                className={styles.navbaritembutton}
              >
                Signup
              </Nav.Link>
              <NavDropdown
                title="EN"
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
