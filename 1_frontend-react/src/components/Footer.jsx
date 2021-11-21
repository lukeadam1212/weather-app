import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "./Buttons/Button";
import styled from "styled-components";

// social media icons
import instagram from "../assets/images/social-media/instagram.png";
import facebook from "../assets/images/social-media/facebook.png";
import linkedIn from "../assets/images/social-media/linkedIn.png";

// custom hooks
import useOnClickOutside from "./Hooks/useOnClickOutside.js";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0%;
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.7);
  div:first-child {
    width: 33%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  div:nth-child(1) {
    width: 33%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .home {
    background-color: gray;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: #ffffff;
    }
  }
  .social-media img {
    height: 2rem;
  }
`;

const RightNav = styled.div`
  position: relative;
  text-align: left;
  width: 33%;
  line-height: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 12rem;
  background-color: rgba(27, 27, 27, 0.9);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  bottom: 3.8rem;
  padding: 1rem;
`;

const Navbar = styled.ul`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Footer = () => {
  // hooks
  //state
  const [open, setOpen] = useState(false);
  // ref
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledFooter>
      <div className="left-nav"></div>

      <div className="left-nav-two"></div>
      <div className="middle-nav">
        <div className="home-btn">
          <Link className="home" to="/">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" />
            </svg>
          </Link>
        </div>
      </div>
      <RightNav className="right-nav" ref={node}>
        <svg
          open={open}
          setOpen={setOpen}
          onClick={() => setOpen(!open)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
        </svg>

        <Dropdown className="dropdown" open={open} setOpen={setOpen}>
          <Navbar className="navbar">
            <Link onClick={() => setOpen(!open)} to="/">
              Home
            </Link>
          </Navbar>

          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram} alt="" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={linkedIn} alt="" />
            </a>
          </div>

          <Link to="/contact-us">
            <Button
              button={{
                action: () => setOpen(!open),
                type: "submit",
                text: "Contact Us",
              }}
            />
          </Link>
        </Dropdown>
      </RightNav>
    </StyledFooter>
  );
};

export default Footer;
