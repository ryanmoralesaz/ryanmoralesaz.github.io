/* eslint-disable */
import React, { Component } from "react";
import { Router, Route, Routes, Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import { Button, Container, Row, Col, CardImg, Card } from "reactstrap";
import "../App.css";

class Entry extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <div style={{ backgroundColor: "#007FFF", borderBottomLeftRadius: 50 }}>
              <h1 style={{ color: "white" }}>Ryan Morales</h1>
              <h2 className="title">Full-Stack Javascript Developer</h2>
            </div>
            <Row className="mb-4 pt-0">
              <Col className="col-l">
                <Link to="/about">
                  <Button color="secondary" className="w-100">
                    <span>About</span>
                  </Button>
                </Link>
              </Col>
              <Col className="col-l">
                <Link to="/">
                  <Button color="primary" className="w-100">
                    <span>Portfolio</span>
                  </Button>
                </Link>
              </Col>
              <Col className="col-l">
                <Link to="/contact">
                  <Button color="dark" className="w-100">
                    <span>Contact</span>
                  </Button>
                </Link>
              </Col>
            </Row>
            <Route exact path="/" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Card>&copy; Ryan Morales 2018</Card>
          </Container>
        </div>
      </Router>
    );
  }
}

export default Entry;
