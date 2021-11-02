import React from "react";
import ContactUs from "./ContactMe";
import { Column, Heading } from "./FooterStyles";
import Card from "react-bootstrap/Card";
import SocialMedia from "./SocialMedia";
export default function Footer() {
  return (
    <div className="Footer">
      <Card sticky="buttom" text="info" bsPrefix="card-footer" id="card">
        <Card.Header id="cardHeader">© 2021 Raghad Al Samrout</Card.Header>
        <Card.Body id="cardBody">
          <Column>
            <Heading>Send me an email</Heading>
            <ContactUs />
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <SocialMedia />
          </Column>
        </Card.Body>
      </Card>
    </div>
  );
}
