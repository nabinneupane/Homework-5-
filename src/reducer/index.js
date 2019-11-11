import {combineReducers} from 'redux' 
import addItem from './addItem'
import searchItem from './searchItem'
import stockItem from './stockItem'
import addCatagory from './addCatagory'



const reducer = combineReducers({
    addItem,
     searchItem,
    stockItem,
     addCatagory
})

export default reducer