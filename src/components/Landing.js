/* eslint-disable */
import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Portfolio from "./Portfolio";
// import About from "./About";
// import Contact from "./Contact";
// import { Button, Container, Row, Col, CardImg, Card } from "reactstrap";

const Landing = () => {
  console.log("landing");
  useEffect(() => {
    // console.log(currentPath);
    console.log("--------------------");
  }, []);
  return (
    <div>
      <div style={{ backgroundColor: "#007FFF", borderBottomLeftRadius: 50 }}>
        <h1 style={{ color: "white" }}>Ryan Morales</h1>
        <h2 className="title">Full-Stack Javascript Developer</h2>
      </div>
      <div className="mb-4 pt-0">
        <div className="col-l">
          <Link to="/about">
            <div color="secondary" className="w-100">
              <span>About</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-l">
        <Link to="/">
          <div color="primary" className="w-100">
            <span>Portfolio</span>
          </div>
        </Link>
      </div>
      <div className="col-l">
        <Link to="/contact">
          <div color="dark" className="w-100">
            <span>Contact</span>
          </div>
        </Link>
      </div>

      {/* <Route exact path="/" component={Portfolio} /> */}
      {/* <Route path="./about" component={About} /> */}
      {/* <Route path="/contact" component={Contact} /> */}
      <div>&copy; Ryan Morales 2018</div>
    </div>
  );
};

export default Landing;

const styles = {
  Title: {
    fontSize: 50,
  },
};
