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

function CustomNavbar() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="py-2">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <span style={{ color: "white", fontWeight: "bold" }}>INDIAN</span>
          <span
            style={{
              backgroundColor: "orange",
              color: "black",
              padding: "2px 6px",
              borderRadius: "4px",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            Hub
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Porn Videos" id="porn-videos-dropdown">
              <NavDropdown.Item href="#">Trending</NavDropdown.Item>
              <NavDropdown.Item href="#">New</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item href="#">Amateur</NavDropdown.Item>
              <NavDropdown.Item href="#">MILF</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Live Cams" id="cams-dropdown">
              <NavDropdown.Item href="#">Popular</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pornstars" id="stars-dropdown">
              <NavDropdown.Item href="#">Top Rated</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Fuck Now</Nav.Link>
            <NavDropdown title="Community" id="community-dropdown">
              <NavDropdown.Item href="#">Forum</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Photos & GIFs" id="media-dropdown">
              <NavDropdown.Item href="#">Photos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className="d-flex align-items-center mt-3 mt-lg-0 flex-column flex-lg-row w-100 w-lg-auto">
            <Form className="me-lg-3 w-100 mb-2 mb-lg-0" style={{ maxWidth: "250px" }}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{
                  backgroundColor: "#333",
                  border: "none",
                  color: "white",
                }}
              />
            </Form>

            <Button
              variant="warning"
              className="me-2"
              style={{ fontWeight: "bold" }}
            >
              AI JERK OFF
            </Button>

            <Nav.Link href="#" className="text-white">
              <i className="bi bi-person-circle" style={{ fontSize: "1.5rem" }}></i>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
