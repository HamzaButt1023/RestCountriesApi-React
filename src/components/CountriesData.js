import React from "react";
import Table from "./Table";

function CountriesData({
  record,
  getData,
  setuserCountryName,
  userCountryName,
}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 px-0">
            <input
              className="form-control"
              type="text"
              value={userCountryName}
              onChange={(e) => setuserCountryName(e.target.value)}
            />
            <span>{}</span>
          </div>
          <div className="col">
            <button
              disabled={userCountryName.length === 0}
              className="btn btn-primary"
              onClick={getData}
            >
              Get Data
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table table-secondary table-striped my-5" id="table">
          <thead>
            <tr>
              <td>Common Name</td>
              <td>Official Name</td>
              <td>Languages</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {record.map((element, index) => (
              <Table data={element} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountriesData;
