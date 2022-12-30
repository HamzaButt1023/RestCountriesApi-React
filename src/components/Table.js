import React from "react";
import { Link } from "react-router-dom";

function Table({ data }) {
  return (
    <tr>
      <td>{data.name?.common}</td>
      <td>{data.name?.official}</td>
      <td>{data.languages ? Object.values(data.languages).join(", ") : ""}</td>
      <td>
        <Link to={"/card/" + data.name?.common}>
          <button className="btn btn-primary">View</button>
        </Link>
      </td>
    </tr>
  );
}

export default Table;
