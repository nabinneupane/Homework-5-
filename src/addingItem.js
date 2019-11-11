import React from 'react'
import {connect} from 'react-redux'
import {addItem} from './action'
import './index.css'

function  AddingItem  ({categories,dispatch}) {
    
    let name, category,price, inStock;

        return (
            <div>
            
                    <h4> Please enter the details to add the product </h4>
                    <form onSubmit = {(e) => {
                        e.preventDefault();
                        var item = { name :name.value, category: category.value, 
                                     price: `$${price.value}`, stocked: inStock }
                        dispatch(addItem(item)); 
                        //Empty value in form after adding 
                        name.value='';
                        price.value='';
                        category.value='';
                                         
                    }}> 
                        <div className="forForm">
                            <label htmlFor="Item" style={{fontWeight:"Bold"}}> Name:   </label>
                            <input type="text"placeholder="Enter the name" id="Item" 
                                ref={node => {name=node}} pattern="[a-zA-Z\s]+"  required/>
                        </div>
                        <div className="forForm">
                            <label htmlFor="Price" style={{fontWeight:"Bold"}}> Price:   </label>
                            <input type="number" placeholder="Enter the price" id="Price"
                            ref={node => {price=node}} required/> 
                        </div>
                        <div className="forForm">
                            <label htmlFor="Category" style={{fontWeight:"Bold"}}> Category:  </label>
                            <select ref={(node)=>{category=node}}> {categories.map((item)=> (<option key={item}> {item} </option>))} </select> 
                        </div>
                        <div className="forForm" style={{marginRight:"50px"}}>
                            <label style={{fontWeight:"Bold"}}> In Stock: </label>
                            <input type="radio" id="stock" name="InStock"value="true"
                                onChange={()=> inStock = true}/> Yes   &nbsp; &nbsp;
                            <input type="radio"id="Stock"name="InStock" value="false"
                                onChange={()=>inStock = false}/>No 
                    </div>
                    <input type="submit" value="Add Product"/> 
                    </form>
            </div>
        );
    
}



const  mapStateToProps =state =>
{
  return {
    categories:state.addCatagory.category
    }
}
export default  connect(mapStateToProps)(AddingItem);
