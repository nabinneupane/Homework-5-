export const ADD_ITEM = 'ADD_ITEM'
export const ADD_CATAGORY = 'ADD_CATAGORY'
export const SEARCH_ITEM = 'SEARCH_ITEM'
export const IN_STOCK = 'IN_STOCK'

export const addItem = (item) => {
    return {
        type:ADD_ITEM,
    payload: item
}
}

export const addcatagory =(item) =>{
    return {
        type:ADD_CATAGORY,
        payload:item
    }
}

export const SearchItem= (item) =>{
    return {
        type:SEARCH_ITEM,
        payload:item
    }
}

export const inStockCheck =(item) =>{
    return {
        type:IN_STOCK,
        payload: item
    }
}