// Please run this command "npm install --save styled-components"  
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Paragraph,
  Paragraph1
} from "./Styles";

const Footer = () => {
  return (
    <Box>
      <Container>
      <Row>
        <Column>
            <Heading>Events</Heading>
            <FooterLink href="#">Academics</FooterLink>
            <FooterLink href="#">Hobbies & Recreation</FooterLink>
            <FooterLink href="#">Social Initiative</FooterLink>
            <FooterLink href="#">Academics</FooterLink>
            <FooterLink href="#">Khoj Talks</FooterLink>

          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <Paragraph1>KHOJ Find ur Real You </Paragraph1>
             <Paragraph>
             under the aegis of Division of Student Welfare,
Lovely Professional University.
Phagwara, Punjab (India) - 144411 </Paragraph>
<Paragraph>(+91) 7079-8148-52</Paragraph>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Linkedln
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
            <i className="fab fa-telegram">
                <span style={{ marginLeft: "10px" }}>
                  Telegram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <h3 style={{ color: "white",
                   textAlign: "left",
                   marginTop: "10px" }}>
                     <i class="far fa-copyright">
        KHOJ:Find ur Real You All Right Reserved</i>
      </h3>
    </Box>
  );
};
export default Footer;