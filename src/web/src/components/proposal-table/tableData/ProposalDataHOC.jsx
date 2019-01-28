/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line consistent-return
const renderTableData = (parent, key, value) => {
  switch (key) {
    case 'name':
      return <Link to={`/proposals/edit/${parent.id}`}>{value}</Link>;
    case 'owner':
      return `${value.firstName}  ${value.lastName}`;
    case 'company':
      return `Ogavah P/L`;
    case 'createdAt':
      // eslint-disable-next-line no-case-declarations
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ];
      const date = new Date(parseInt(value));
      return `${date.getDay()} ${
        months[date.getMonth()]
      } ${date.getFullYear()} `;
    case '__typename':
      break;
    default:
      return value;
  }
};

export default renderTableData;
