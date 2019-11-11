import React from 'react';

import './App.css';
import FilterableProductTable from './FilterableProductTable';


import AddingItem from './addingItem'
import AddingCatagory from './addingCatagory'

function App() {
  return( 
    <div className="App">
    <div style={{marginLeft:"190px"}}> 
    <AddingItem /> <br/>
    <AddingCatagory />
    </div>
	    <FilterableProductTable />
    </div>
  );
}


export default App;
