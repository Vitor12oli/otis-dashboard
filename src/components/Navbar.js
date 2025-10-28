import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ color:'#FF6600', fontWeight:'bold' }}>
          OTIS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projetos</Nav.Link>
            <Nav.Link as={Link} to="/reports">Relatórios</Nav.Link>
            <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
          </Nav>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Usuário
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Perfil</Dropdown.Item>
                <Dropdown.Item href="#">Configurações</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Sair</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
