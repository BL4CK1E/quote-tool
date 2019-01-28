/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Table from '../table/Table';

import tableHeaders from './tableHeaders.json';

export default class ProposalTable extends Component {
  generateTableHeaders() {
    const { headers } = tableHeaders;
    return headers.map((header, index) => (
      <th key={`p-${header}=${index * 4 + index}`} width={header.width}>
        {header.name}
      </th>
    ));
  }

  generateTableRows() {
    const { proposals } = this.props;
    if (proposals) {
      return proposals.map(data => {
        const cellData = Object.keys(data).map(cell => {
          if (cell === 'name') {
            return (
              <td key={`tbody-row-${data[cell]}`}>
                <Link to={`/proposals/edit/${data.id}`}>{data[cell]}</Link>
              </td>
            );
          }
          return <td key={`tbody-row-${data[cell]}`}> {data[cell]} </td>;
        });
        return <tr key={`tbody-row-${data.id}`}>{cellData}</tr>;
      });
    }
    return (
      <tr>
        <td span="6">No Data</td>
      </tr>
    );
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>{this.generateTableHeaders()}</tr>
        </thead>
        <tbody>{this.generateTableRows()}</tbody>
      </Table>
    );
  }
}
