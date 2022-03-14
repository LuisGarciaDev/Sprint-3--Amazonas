import { typesProducts } from '../types/types';

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {       
        case typesProducts.list:
            return {
                products: [...action.payload]
            }
        
        case typesProducts.search:
            return {
                products: action.payload
            }
        
        case typesProducts.detail:
            return {
                products: action.payload
            }

        case typesProducts.category:
            return {
                products: state.products.filter((prod) => prod.category === action.payload)
            }
    
        default:
            return state;
    }
}