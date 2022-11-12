/* eslint-disable */
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";//import Carousel from "nuka-carousel";//import winScreen from "./win-screen-tic.png";//import startScreen from "./tic-tac-toe-startscreen.png";//import gameScreen from "./game-play-tic.png";
import React, { Component } from "react";
import { Card, CardImg, Row, Col, Button } from "reactstrap";
import Modal from "react-modal";
// import "react-router-modal/css/react-router-modal.css";
import "../../App.css";
import employeeDirectory from "../gifs/employee-directory.gif";

class EmployeeDirectory extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement("body");
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Button onClick={this.openModal} color="info" className="w-100">
          Get Info
        </Button>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} contentLabel="Example Modal">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ backgroundColor: "red" }}>
              <Button onClick={this.closeModal} style={{ backgroundColor: "transparent" }}>
                <div style={{ fontSize: "2vh", color: "black" }}>X</div>
              </Button>
            </div>
            <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>Employee Directory</h1>
            <h2>Description</h2>
            <p>This page retrieves JSON data for fictional employees and sorts it into randomly organized modals that can be easily browsed.</p>
            <Row className="w-50 m-auto">
              <Col>
                <CardImg src={employeeDirectory} />
              </Col>
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/employee-directory/">
                  <Button color="success">Live Demo</Button>
                </a>
              </Col>
            </Row>
            {/*<h2>Total Lines of Code</h2>
              <p>700</p>
              <h2>Invested Hours</h2>
              <p>12</p>
              <h2>Languages/Modules Used</h2>
              <p>#</p>
              <h2>Tools Used</h2>
              <p>lorem</p>
              <h2>Special Features</h2>
              <p>lorem</p>
              <h2>Assets Used</h2>
    <p>lorem</p>*/}
            <h3>Origin/Credits</h3>
            <p>This app originated as a project for the Treehouse Full-Stack Javascript Tech Degree.</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default EmployeeDirectory;
