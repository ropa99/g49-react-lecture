import React from "react";

function Table() {
  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
    );
  };

  const TableRows = () => {
    return (
      <tbody>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr>
      </tbody>
    );
  };

  return (
    <div className="container">
      <table className="table table-hover">
        <TableHeader />
        <TableRows />
      </table>
    </div>
  );
}

export default Table;
