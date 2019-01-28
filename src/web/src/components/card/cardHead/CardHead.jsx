import React from "react";
import PropTypes from "prop-types";
import StyledCardHead from "./styled";

export default function CardHead({ children }) {
  return <StyledCardHead>{children}</StyledCardHead>;
}

CardHead.propTypes = {
  children: PropTypes.node.isRequired
};
