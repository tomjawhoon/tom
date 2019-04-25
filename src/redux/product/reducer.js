import ProductAction from './actions';

const types = ProductAction.types;

const initialState = {
    products: []
}

export default function ProductReducer(state = initialState, action) {
    switch(action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default :
            return state;
    }
}