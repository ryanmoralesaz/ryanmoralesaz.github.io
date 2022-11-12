/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Entry from "./components/Entry";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import { Button, Container, Row, Col, CardImg, Card } from "reactstrap";
import "./App.css";

const Jumbotron = () => {
  const [test, setTest] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;
  // console.log(currentPath);
  return (
    <>
      <div style={styles.Jumbotron}>
        <h1 style={styles.myName}>Ryan Morales</h1>
        <h2 className="title">Full-Stack Javascript Developer</h2>
      </div>
      <nav style={styles.linkNav}>
        <ul style={styles.linkItems}>
          {currentPath !== "/" ? (
            <li style={styles.linkItem}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div style={styles.linkWrapper}>
                  <span>Portfolio</span>
                </div>
              </Link>
            </li>
          ) : (
            <li style={styles.linkItem}>
              <div style={styles.linkWrapper}></div>
            </li>
          )}
          {currentPath !== "/resume" ? (
            <li style={styles.linkItem}>
              <Link to="/resume" style={{ textDecoration: "none" }}>
                <div style={styles.linkWrapper}>
                  <span>Resume</span>
                </div>
              </Link>
            </li>
          ) : (
            <li style={styles.linkItem}>
              <div style={styles.linkWrapper}></div>
            </li>
          )}
          {currentPath !== "/contact" ? (
            <li style={styles.linkItem}>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <div style={styles.linkWrapper}>
                  <span>Contact</span>
                </div>
              </Link>
            </li>
          ) : (
            <li style={styles.linkItem}>
              <div style={styles.linkWrapper}></div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};
function App() {
  // console.log("--------------------");
  // const [mainPage, setMainPage] = useState(1);
  return (
    <div style={styles.container} className="App">
      <Jumbotron />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "2vw",
    paddingRight: "2vw",
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#f8F0E3",
  },
  Jumbotron: {
    display: "flex",
    flexDirection: "column",
    marginTop: 0,
    padding: 0,
    borderBottomLeftRadius: "20vw",
    background: "linear-gradient(blue, #ffffff)",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  myName: {
    color: "white",
    fontSize: "10vh",
  },
  linkNav: {
    display: "flex",
    // backgroundColor: "blue",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  linkItems: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // background: "yellow",
  },
  linkItem: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid black",
  },
  linkWrapper: {
    // backgroundColor: "blue",
    fontSize: "5vh",
  },
};
