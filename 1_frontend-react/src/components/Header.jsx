import React from "react";
import { Link } from "react-router-dom";
import Form from "./Forms/Form";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledSection = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCategories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 60%;
  width: 100%;
`;

const CategoryDiv = styled.div`
  height: 90%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  h6 {
    font-size: 0.6rem;
    padding-top: 0.3rem;
  }
  img {
    height: 3rem;
    width: auto;
    object-fit: cover;
    overflow: hidden;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 25%;
  }
  img:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    @keyframes shake {
      10%,
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      20%,
      80% {
        transform: translate3d(1px, 0, 0);
      }

      30%,
      50%,
      70% {
        transform: translate3d(-2px, 0, 0);
      }

      40%,
      60% {
        transform: translate3d(2px, 0, 0);
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledSection>
        <Form />
      </StyledSection>
      <StyledCategories>
        <CategoryDiv>
          <Link to="/business">
            <img src="https://i.ibb.co/9pRQfjy/business.jpg" alt="business" />
          </Link>
          <h6>Business</h6>
        </CategoryDiv>
        <CategoryDiv>
          <Link to="/technology">
            <img
              src="https://i.ibb.co/yPD4Hgm/technology.jpg"
              alt="technology"
            />
          </Link>
          <h6>Technology</h6>
        </CategoryDiv>
        <CategoryDiv>
          <Link to="health">
            <img src="https://i.ibb.co/dQ7wyNr/health.png" alt="health" />
          </Link>
          <h6>Health</h6>
        </CategoryDiv>
        <CategoryDiv>
          <Link to="sport">
            <img src="https://i.ibb.co/3MgRsGF/sports.jpg" alt="sports" />
          </Link>
          <h6>Sport</h6>
        </CategoryDiv>
        <CategoryDiv>
          <Link to="weather">
            <img src="https://i.ibb.co/D7PpyJg/weather.png" alt="weather" />
          </Link>
          <h6>Weather</h6>
        </CategoryDiv>
      </StyledCategories>
    </StyledHeader>
  );
};

export default Header;
