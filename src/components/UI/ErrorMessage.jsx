import React from "react";
import styled from "styled-components";

const ErrorMessage = ({ children }) => {
  return <StayledMassage>{children}</StayledMassage>;
};
const StayledMassage = styled("span")`
  font-size: 14px;
  color: red;
`;

export default ErrorMessage;
