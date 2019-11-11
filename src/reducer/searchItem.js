import {SEARCH_ITEM} from '../action/index'

const initialState={

    filterText:''
}

export default function (state = initialState, action){
        switch(action.type){
                case SEARCH_ITEM:
                    return Object.assign({},state, {filterText: action.payload})
                default: 
                    return state
        }
}