/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import Table from '../table/Table';
import tableHeaders from './tableHeaders.json';
import renderTableData from './tableData/ProposalDataHOC';

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
        delete data.__typename;
        const cellData = Object.keys(data).map(cell => (
          <td key={`tbody-row-${cell}`}>
            {renderTableData(data, cell, data[cell])}
          </td>
        ));
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
