import React from "react";

class ListLayout extends React.Component {
  render() {
    return (
      <div>
        <div>Facet</div>
        <div>
          <table>
            <tr>
              <td>Product Name</td>
              <td>Product Owner</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default ListLayout;
