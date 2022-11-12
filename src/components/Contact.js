/* eslint-disable */
import React, { Component } from "react";
import { Button, Container, Row, Col, CardImg, Card } from "reactstrap";
class Contact extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          width: "60%",
        }}
      >
        <h2 style={{ fontSize: "5vh" }}>Contact Ryan</h2>
        <form action="https://formspree.io/ryanmoralesaz@gmail.com" style={styles.formWrapper} method="post">
          <fieldset style={styles.fieldWrapper}>
            <legend>Email</legend>

            <label for="name">Name:</label>
            <input type="text" id="name" name="user_name" />

            <label for="mail">Email:</label>
            <input type="email" id="mail" name="user_email" />

            <label for="message">Message:</label>
            <textarea wrap="soft" id="message" name="user_message" />
          </fieldset>

          <Button type="submit">Send</Button>
        </form>
      </div>
    );
  }
}

export default Contact;

const styles = {
  formWrapper: {
    // display: "flex",
    // justifyContent: "center",
    width: "80%",
    textAlign: "left",
    margin: "auto",
  },
  fieldWrapper: {
    width: "90%",
  },
};
