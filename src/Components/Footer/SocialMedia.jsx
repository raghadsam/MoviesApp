import React from "react";
import { FooterLink } from "./FooterStyles";
export default function SocialMedia() {
  return (
    <>
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
    </>
  );
}
