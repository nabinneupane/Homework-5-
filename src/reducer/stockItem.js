
import {IN_STOCK} from '../action/index'

const initialState= {
    inStockOnly:false
}


export default function (state = initialState, action){
        switch(action.type){
                case IN_STOCK:
                     return Object.assign({},state, {inStockOnly:action.payload})
                default: 
                    return state
        }
}
