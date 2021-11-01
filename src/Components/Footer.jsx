import React from "react";
import ContactUs from "./ContactMe";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
export default function Footer() {
  return (
    <Box>
      <Heading style={{ color: "#0dcaf0", textAlign: "center" }}>
        © 2021 Raghad Al Samrout
      </Heading>
      <Container>
        <Row>
          <Column>
            <Heading>Send me an email</Heading>
            <ContactUs />
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://github.com/raghadsam">
              <i className="fab fa-github">
                <span style={{ marginLeft: "10px" }}>GitHub</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/raghad-al-samrout">
              <i className="fab fa-linkedin">
                <span style={{ marginLeft: "10px" }}>LinkedIn</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/raghad_samrout/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}
