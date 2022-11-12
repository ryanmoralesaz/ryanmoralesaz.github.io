/* eslint-disable */
import React, { Component } from "react";
import { Card, CardImg, Row, Col, Button } from "reactstrap";
import quoteAppPng from "../gifs/quote-generator-lg.gif";
import Modal from "react-modal";
// import "react-router-modal/css/react-router-modal.css";
import "../../App.css";

class QuoteAppInfo extends Component {
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

            <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>Quote Generator</h1>
            <h2>Description</h2>
            <p>
              This app displays randomly generated, hard-coded quotes from a javascript array at timed intervals.
              <br />
              The quotes are presented on a pleasing background.
              <br />
              The user has the option to interact with the app through pressing the ‘show another quote’ button.
            </p>
            <Row className="m-auto w-75">
              <Col>
                <CardImg src={quoteAppPng} style={{ width: "80%" }} />
              </Col>
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/quote_generator/">
                  <Button color="success">Live Demo</Button>
                </a>
              </Col>
            </Row>
            <h2>Total Lines of Code</h2>
            <p>308</p>
            <h2>Invested Hours</h2>
            <p>10</p>
            <h2>Languages/Modules Used</h2>
            <p>HTML, CSS, Javascript</p>
            <h2>Tools Used</h2>
            <p>
              This project utilizes javascript objects and arrays to store data.
              <br />
              HTML, CSS and Javascript are used to retrieve data and present it through document object model manipulation.
            </p>
            <h2>Special Features</h2>
            <p>
              Quotes are not re-generated until all other quotes in the array have been iterated.
              <br />
              Google fonts are imported to improve display.
              <br />
              Background color changes each time button is clicked.
              <br />
              Uses a normalize css file to reset styles to display equally across all browsers.
            </p>
            <h2>Assets Used</h2>
            <p>Index.html, Scripts.js, Normalize.css, Styles.css</p>
            <h3>Origin/Credits</h3>
            <p>This project originated as a course project for the Treehouse Full-Stack tech degree.</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default QuoteAppInfo;
