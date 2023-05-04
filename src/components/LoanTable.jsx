import React from 'react';
import { Table } from 'react-bootstrap';

const data = [
  { name: 'John Doe', status: 'Approved', loanAmount: 10000, checking: 5000 },
  { name: 'Jane Smith', status: 'Pending', loanAmount: 5000, checking: 2000 },
  { name: 'Bob Johnson', status: 'Rejected', loanAmount: 0, checking: 1000 },
  { name: 'Jane Smith', status: 'Pending', loanAmount: 5000, checking: 2000 },
  { name: 'Bob Johnson', status: 'Rejected', loanAmount: 0, checking: 1000 },
  { name: 'Jane Smith', status: 'Pending', loanAmount: 5000, checking: 2000 },
  { name: 'Bob Johnson', status: 'Rejected', loanAmount: 0, checking: 1000 },
];

const LoanTable = () => {
  return (
    <Table className='table-kowaja' responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Loan Amount</th>
          <th>Checking</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.status}</td>
            <td>${item.loanAmount.toLocaleString()}</td>
            <td>${item.checking.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LoanTable;
