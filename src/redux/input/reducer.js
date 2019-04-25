import InputAction from './actions';

const types = InputAction.types;

const initialState = {
    id: '',
    name: '',
    price : 0.00
}

export default function InputReducer(state = initialState, action) {
    console.log(state)
    switch (action.type) {
        case types.UPDATE_ID:
            return {
                ...state,
                id: action.id
            }
        case types.UPDATE_NAME:
            return {
                ...state,
                name: action.name
            }
        case types.UPDATE_PRICE:
            return {
                ...state,
                price: action.price
            }
        default:
            return state;
    }
}