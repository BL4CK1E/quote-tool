import React, { Component } from "react";

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
    const Proposals = this.props.proposals.Proposals;
    Proposals.map((data, index) => {
      console.log(data);
    });
  }

  render() {
    const { children } = this.props;
    return (
      <Table>
        <thead>
          <tr>{this.generateTableHeaders()}</tr>
        </thead>
        {this.generateTableRows()}
      </Table>
    );
  }
}
