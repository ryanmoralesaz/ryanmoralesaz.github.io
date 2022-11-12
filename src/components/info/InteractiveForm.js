/* eslint-disable */
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";//import Carousel from "nuka-carousel";//import winScreen from "./win-screen-tic.png";//import startScreen from "./tic-tac-toe-startscreen.png";//import gameScreen from "./game-play-tic.png";
import React, { Component } from "react";
import { Card, CardImg, Row, Col, Button } from "reactstrap";
import Modal from "react-modal";
// import "react-router-modal/css/react-router-modal.css";
import "../../App.css";
import interactiveForm from "../gifs/interactive-form.gif";

class InteractiveForm extends Component {
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
      <div>
        <Button onClick={this.openModal} color="info" className="w-100">
          Get Info
        </Button>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} contentLabel="Example Modal">
          <div>
            <Button onClick={this.closeModal} className="float" color="danger">
              X
            </Button>
            <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>Interactive Form</h1>
            <h2>Description</h2>
            <p>This is a demonstration of html form tags proficiency. The form is self-correcting giving warnings if data is entered incorrectly.</p>
            <Row className="w-50 m-auto">
              <Col>
                <CardImg src={interactiveForm} style={{ height: "300px" }} />
              </Col>
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/interactive-form/">
                  <Button color="success">Live Demo</Button>
                </a>
              </Col>
            </Row>
            {/*
            <h2>Total Lines of Code</h2>
            <p>#</p>
            <h2>Invested Hours</h2>
            <p>#</p>
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

export default InteractiveForm;
