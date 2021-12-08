import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder, value, ...props }) => {
  return (
    <StyledInput
      onChange={(e) => {
        props.setValue(e.target.value);
      }}
      value={value}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 0.5rem;
  width: 100%;
  height: 3rem;

  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 0.5rem;
  }
  &::placeholder {
    color: #808080;
    font-weight: 300;
    font-size: 1rem;
  }
`;

export default Input;
