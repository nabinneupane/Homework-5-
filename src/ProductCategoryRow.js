import React from 'react';
import './index.css'

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr >
        <th className="catagory" colSpan="2" >
          {category}
        </th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
