import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function CustomNavbar() {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      style={{ backgroundColor: "#0f0f0f" }}
      className="px-4 py-2"
    >
      <Container fluid className="d-flex align-items-center justify-content-between">
        {/* Left Section: Brand + Menu */}
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#" className="me-4">
            <span style={{ color: "white", fontWeight: "bold", fontSize: "1.4rem" }}>
              INDIAN
            </span>
            <span
              style={{
                backgroundColor: "#f8a100",
                color: "black",
                padding: "3px 8px",
                borderRadius: "4px",
                marginLeft: "5px",
                fontWeight: "bold",
                fontSize: "1.4rem",
              }}
            >
              Hub
            </span>
          </Navbar.Brand>

          <Nav className="align-items-center">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Porn Videos" id="dropdown1">
              <NavDropdown.Item href="#">Trending</NavDropdown.Item>
              <NavDropdown.Item href="#">Latest</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Categories" id="dropdown2">
              <NavDropdown.Item href="#">Amateur</NavDropdown.Item>
              <NavDropdown.Item href="#">MILF</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Live Cams" id="dropdown3">
              <NavDropdown.Item href="#">Top</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pornstars" id="dropdown4">
              <NavDropdown.Item href="#">Famous</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Fuck Now</Nav.Link>
            <NavDropdown title="Community" id="dropdown5">
              <NavDropdown.Item href="#">Forum</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Photos & GIFs" id="dropdown6">
              <NavDropdown.Item href="#">Photos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>

        {/* Right Section: Search + Button + Icon */}
        <div className="d-flex align-items-center">
          <Form className="d-none d-lg-flex me-3" style={{ width: "200px" }}>
            <FormControl
              type="search"
              placeholder="Search"
              style={{
                backgroundColor: "#333",
                border: "none",
                color: "white",
              }}
            />
          </Form>
          <Button
            variant="warning"
            className="me-3"
            style={{ fontWeight: "bold", padding: "6px 14px" }}
          >
            AI <br /> JERK <br /> OFF
          </Button>
          <i className="bi bi-person-circle" style={{ fontSize: "1.5rem", color: "white" }}></i>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
