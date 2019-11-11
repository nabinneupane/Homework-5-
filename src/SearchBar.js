import React from 'react';
import {SearchItem,inStockCheck} from './action'
import {connect} from 'react-redux'


function  SearchBar ({dispatch}) 
  {

    return (
      <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange = {e => {
            e.preventDefault()
            dispatch(SearchItem(e.target.value))
          }}
        />
        <p>
          <input
            type="checkbox"
            id="check"
            onChange={()=> {
              if(document.getElementById("check").checked){
                  dispatch(inStockCheck(true));
              } else {
                dispatch(inStockCheck(false));
              }
            }}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
      </div>
    );
  }

function mapStateToProps(state)
{
  return {
    checkStock: state.stockItem.inStockOnly,
    search: state.searchItem.filterText
  }
}

export default connect(mapStateToProps)(SearchBar);
