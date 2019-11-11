import React from 'react';
import './index.css'
class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr style={{borderLeft:"solid 1px black",borderRight:"solid 1px black"}}>
        <td style={{paddingRight:"20px", borderRight:"solid 1px black"}}>{name}</td>
        <td style={{paddingLeft:"35px"}}>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
