import React from 'react';
import { Link } from 'react-router-dom';
import genDate from '../../../utils/genDate';
import ProposalStatus from '../../proposal-status/ProposalStatus';

const renderTableData = (parent, key, value) => {
  let finalValue;
  switch (key) {
    case 'name':
      finalValue = <Link to={`/proposals/edit/${parent.id}`}>{value}</Link>;
      break;
    case 'owner':
      finalValue = `${value.firstName}  ${value.lastName}`;
      break;
    case 'company':
      finalValue = `Ogavah P/L`;
      break;
    case 'createdAt':
      finalValue = genDate(value);
      break;
    case 'status':
      finalValue = <ProposalStatus status={value} />;
      break;
    default:
      finalValue = value;
  }
  return finalValue;
};

export default renderTableData;
