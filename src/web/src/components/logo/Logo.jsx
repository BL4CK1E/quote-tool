/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */

import React from "react";
import StyledHeading from "./styled";

export default function Logo(props) {
  const { isCollapsed, size, white, className } = props;
  return (
    <StyledHeading size={size} white={white} isCollapsed={isCollapsed}>
      Proposify
    </StyledHeading>
  );
}
