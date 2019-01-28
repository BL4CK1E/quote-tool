/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "../table/Table";

import tableHeaders from "./tableHeaders.json";

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
          if (cell === "name") {
            return (
              <td>
                <Link to={`/proposals/edit/${data.id}`}>{data[cell]}</Link>
              </td>
            );
          }
          return <td>{data[cell]}</td>;
        });
        return <tr>{cellData}</tr>;
      });
    }
    return <td span="6">No Data</td>;
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
