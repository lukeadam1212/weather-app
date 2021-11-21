import React from "react";
import Input from "../Inputs/Input";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = () => {
  return (
    <StyledForm>
      <Input
        type="text"
        name="searchBar"
        forValue="searchBar"
        placeholder="Search Latest News"
      />
      {/* <Button type="submit" text="click here" /> */}
    </StyledForm>
  );
};

export default Form;
