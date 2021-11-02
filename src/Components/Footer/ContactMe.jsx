import React from "react";
import emailjs from "emailjs-com";
import { Button, Form } from "react-bootstrap";

export default function ContactUs() {
  const id = process.env.REACT_APP_ID;
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_aveq8sx", "template_ynhsr8e", e.target, id).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
        console.log(process.env.REACT_APP_ID);
      }
    );
    e.target.reset();
  }

  return (
    <Form onSubmit={sendEmail}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="Name" name="from_name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Message"
          name="message"
        />
      </Form.Group>
      <Button variant="primary" type="submit" id="submitButton">
        Send ✉️
      </Button>
    </Form>
  );
}
