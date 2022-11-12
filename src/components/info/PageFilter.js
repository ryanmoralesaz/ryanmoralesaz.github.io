/* eslint-disable */
import React, { Component } from "react";
import { Card, CardImg, Row, Col, Button } from "reactstrap";
import Modal from "react-modal";
// import "react-router-modal/css/react-router-modal.css";
import "../../App.css";
import listFilter from "../gifs/list-filter.gif";

class PageFilter extends Component {
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
            <h1 style={{ textAlign: "center", marginBottom: "3rem" }}>Pagination Filter</h1>
            <h2>Description</h2>
            <p>
              This pagination filter is a progressively enhanced UI for organizing and displaying content.
              <br />
              The content is still available to the end user if the javascript is not active.
              <br />
              The application can take a hard-coded list of up to 100 users and filter and paginate into groups of 10 <br />
              with functional page navigation added to the bottom of the page.
            </p>
            <Row className="w-50 m-auto">
              <Col>
                <CardImg src={listFilter} style={{ height: "300px" }} />
              </Col>
              <Col className="pb-5">
                <a href="https://ryanmoralesaz.github.io/pagination-filter/">
                  <Button color="success">Live Demo</Button>
                </a>
              </Col>
            </Row>
            <h2>Total Lines of Code</h2>
            <p>700</p>
            <h2>Invested Hours</h2>
            <p>12</p>
            <h2>Languages/Modules Used</h2>
            <p>HTML, CSS, Javascript</p>
            <h2>Tools Used</h2>
            <p>Progressive Enhancement.</p>
            <h2>Special Features</h2>
            <p>Active pagination navigation.</p>
            <h2>Assets Used</h2>
            <p>index.html, main.js, students.html, design.css, reset.css</p>
            <h3>Origin/Credits</h3>
            <p>This project originated as a course project for the Treehouse Full-Stack tech degree.</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PageFilter;
