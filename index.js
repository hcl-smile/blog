import React from "react";
import ReactDOM from "react-dom";

function RenderTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>title1</th>
          <th>title1</th>
          <th>title1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title1</td>
          <td>title1</td>
          <td>title1</td>
        </tr>
        <tr>
          <td></td>
          <td>title1</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

ReactDOM.render(<RenderTable />, document.getElementById("root"));
