import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="xxl" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontWeight: 700, fontSize: 24 }}>SMART UNIVERSITY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: 600 }}>
            <Nav.Link as={Link} to="/dashboard" style={{ marginRight: 40, fontWeight: 600, fontSize: 18 }}>Dashboard</Nav.Link>
            <NavDropdown title="Monitor" id="basic-nav-dropdown" style={{ marginRight: 40, fontWeight: 600, fontSize: 18 }}>
              <NavDropdown.Item as={Link} to="/monitor/temperature" style={{ fontWeight: 500, fontSize: 18 }}>
                Temperature
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/monitor/humidity" style={{ fontWeight: 500, fontSize: 18 }}>
                Humidity
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/monitor/soilmoisture" style={{ fontWeight: 500, fontSize: 18 }}>
                Soil Moisture
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Devices" id="basic-nav-dropdown" style={{ fontWeight: 600, fontSize: 18 }}>
              <NavDropdown.Item as={Link} to="/devices/bulb" style={{ fontWeight: 500, fontSize: 18 }}>
                Bulb
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/devices/pumper" style={{ fontWeight: 500, fontSize: 18 }}>
                Pumper
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
