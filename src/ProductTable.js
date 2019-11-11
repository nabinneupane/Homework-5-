import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import {connect} from 'react-redux';

import './index.css';

class ProductTable extends Component {
  render() {
    const filterText = this.props.search;
    const inStockOnly = this.props.checkStock;
    const rows = [];
    let lastCategory = null;
    //Took help from Paribartan Dhakal for this.
     const newArray = this.props.product.sort((a,b) =>(a.category<b.category)?1:-1)
      newArray.forEach((product,index) => {
      if (product.name.indexOf(filterText) === -1)
       {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={index} />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={Math.random()}
        />
      );
      lastCategory = product.category;
    });


    return (
      <table className= "table">
        <thead>
          <tr>
            <th style={{paddingRight:"15px"}}>Name</th>
            <th style={{paddingLeft:"67px"}}>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}


function mapStateToProps(state)
{
  console.log(state.stockItem.inStockOnly);
  return {
    product:state.addItem.products,
    checkStock: state.stockItem.inStockOnly,
    search: state.searchItem.filterText
  }
}

export default ProductTable = connect(
  mapStateToProps
)(ProductTable)