import React from "react";

const AverageDataTable = ({ averageData }) => {
  return (
    <div>
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>USD</th>
            <th>EUR</th>
            <th>GBP</th>
            <th>JPY</th>
          </tr>
        </thead>
        <tbody>
          {averageData?.length > 0 &&
            averageData.map((item, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{item?.USD}</td>
                <td>{item?.EUR}</td>
                <td>{item?.GBP}</td>
                <td>{item?.JPY}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AverageDataTable;
