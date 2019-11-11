import React, { Component } from 'react';
import ProductTable from './ProductTable';

import './index.css'
import SearchBar from './SearchBar' 

class FilterableProductTable extends Component {
  
  render() {
    return (
      <div className="moveTable">
      
     <div style={{marginRight:"82%"}}> <SearchBar/> </div>
        <ProductTable/>
      </div>

    );
  }
}

export default FilterableProductTable;
