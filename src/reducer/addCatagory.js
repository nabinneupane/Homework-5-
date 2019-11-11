import {ADD_CATAGORY} from '../action/index'


const initialState={
    
    category:['Sporting Goods','Electronics']
}


export default function addingCatagory (state = initialState, action){
        switch(action.type){
                case ADD_CATAGORY:
                    return {...state, category: state.category.indexOf(action.payload) < 0 ? [...state.category, action.payload]:state.category}
                default: 
                    return state
        }
}