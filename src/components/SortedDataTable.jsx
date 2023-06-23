import React from "react";

const SortedDataTable = ({ sortedData }) => {
  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>USD</th>
            <th>EUR</th>
            <th>GBP</th>
            <th>JPY</th>
          </tr>
        </thead>
        <tbody>
          {sortedData?.length > 0 &&
            sortedData?.map((item) => (
              <tr>
                <td>{item[0].date}</td>
                <td>{item[0].open}</td>
                <td>{item[1].open}</td>
                <td>{item[2].open}</td>
                <td>{item[3].open}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortedDataTable;
