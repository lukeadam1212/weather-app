import React from "react";

const ClientsTable = ({ columns, clients }) => {
  return (
    <table>
      <thead>
        {columns.map((column) => (
          <th key={columns[column]}>{column}</th>
        ))}
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client._id}>
            {columns.map((element) => (
              <td key={Math.random()}>{client[element]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;
