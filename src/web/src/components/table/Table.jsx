import React from 'react'
import PropTypes from 'prop-types';

import StyledTable from './styled';

export default function Table({children}) {
  return (
    <StyledTable>
      { children }
    </StyledTable>
  )
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
}