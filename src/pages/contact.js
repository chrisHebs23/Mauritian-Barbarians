import React from "react";
import emailjs from "emailjs-com";
import { Title } from "./gallery";
import styled, { keyframes } from "styled-components";
import Button from "../themes/Button";
import Logo from "../../public/logo.png";

const Layout = styled.div`
  height: 100vh;
  margin: 0;
  text-align: center;
  background: none;
  background: url(${Logo}) no-repeat center center;
  background-size: 25rem;
  @media (max-width: 48rem) {
    height: 100%;
  }
`;

const LayerCover = styled.div`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  background: linear-gradient(
    -45deg,
    rgba(238, 119, 82, 0.5),
    rgba(231, 60, 126, 0.5),
    rgba(35, 166, 213, 0.5),
    rgba(35, 213, 171, 0.5)
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: auto;
  @media (max-width: 30rem) {
    flex-direction: column;
    flex-wrap: none;
  }
`;

const Input = styled.input`
  width: 30rem;
  margin: 2%;
  padding: 0;
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 1px;
  @media (max-width: 30rem) {
    width: 90%;
    margin: 4% 0;
  }
`;

const Textarea = styled.textarea`
  width: 80%;
  text-align: center;
  padding: 0;
  border: 1px solid rgba(191, 191, 191, 0.2);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 1px;
  @media (max-width: 64rem) {
    width: 85%;
    margin: 2% auto;
  }
`;
const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  margin: 1%;
`;

const Message = styled.h4`
  margin: 5%;
`;

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_KEY,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <Layout className="layer">
      <LayerCover>
        <Title>Contact Us</Title>
        <Message>
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
          yardarm.
        </Message>
        <Form className="contact-form" onSubmit={sendEmail}>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="text" name="subject" placeholder="Subject" />
          <Input type="email" name="email" placeholder="Email Address" />
          <Textarea name="message" placeholder="Message" rows="5" cols="50" />
          <Break></Break>
          <Button
            type="submit"
            value="Send"
            style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 2px" }}
          >
            Send
          </Button>
        </Form>
      </LayerCover>
    </Layout>
  );
}
