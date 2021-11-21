import React from "react";
import Label from "../Atoms/Label";
import Input from "../Atoms/Input";
import Textarea from "../Atoms/Textarea";
import styled from "styled-components";
import Button from "../Buttons/Button";

const StyledContactForm = styled.form`
  height: 24rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  margin-top: 2rem;

  .labelAndInput {
    display: flex;
    flex-direction: column;
    label {
      color: #8eeafa;
    }
    input {
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid white;
      color: white;
      margin: 0.4rem 0;
    }
    textarea {
      height: 7rem;
      border-radius: 1rem;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 0.5rem;
      text-align: center;
      color: rgba(255, 255, 255, 0.5);
      border: 1px solid white;
      margin: 0.4rem 0;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 0.8rem;
    }
  }
`;

const ContactForm = () => {
  return (
    <StyledContactForm>
      <section>
        <div className="labelAndInput">
          <Label
            label={{
              name: "name",
              text: "Your Name",
            }}
          />
          <Input
            input={{
              type: "text",
              placeholder: "Enter your name...",
            }}
          />
        </div>
        <div className="labelAndInput">
          <Label
            label={{
              name: "name",
              text: "Your Email",
            }}
          />
          <Input
            input={{
              type: "text",
              placeholder: "Enter your email address...",
            }}
          />
        </div>
        <div className="labelAndInput">
          <Label
            label={{
              name: "name",
              text: "Your message",
            }}
          />
          <Textarea
            textarea={{
              name: "message",
              text: "Enter text here...",
            }}
          />
        </div>
      </section>
      <Button
        button={{
          action: () => console.log("it works"),
          type: "submit",
          text: "Send Message",
        }}
      />
    </StyledContactForm>
  );
};

export default ContactForm;
