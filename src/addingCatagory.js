import React from 'react'
import {addcatagory} from './action'
import {connect} from 'react-redux'

let  AddingCatagory = ({dispatch}) => {
        let item;
        
        return (
            <div>
                <h4> Just to enter the Catagory (only Alphabets accepted)</h4>
                <form onSubmit ={ (e) =>{ 
                    e.preventDefault();
                    dispatch(addcatagory(item.value));
                    item.value=''; }}>
                <div className="forForm">
                    <label htmlFor="Catagory" style={{fontWeight:"Bold"}}> Catagory:   </label>
                    <input type="text" placeholder="Enter the catagory" id="Price" ref={node => {item=node}} pattern="[a-zA-Z\s]+" required />
                </div>
                <input type="submit" value="Add Catagory"/>
            </form>
            </div>
        )
    
}



 export default AddingCatagory= connect()(AddingCatagory);

