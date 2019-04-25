import axios from 'axios';

const url = 'http://localhost:8000/api/products/'

const types = {
    FETCH_PRODUCTS: 'FETCH_PRODUCTS'
}

const dispatcher = {
    fetchProduct: () => async (dispatch, getState) => {
        const result = await axios.get(url);
        dispatch({ type: types.FETCH_PRODUCTS, products: result.data })
    },
    addProduct: (product) => async (dispatch, getState) => {
        const result = await axios.post(url, product);
        dispatch({ type: types.FETCH_PRODUCTS, products: result.data })
    },
    updateProduct: (id, product) => async (dispatch, getState) => {
        const path = url + id;
        const result = await axios.put(path, product);
        dispatch({ type: types.FETCH_PRODUCTS, products: result.data })
    },
    deleteProduct: (id) => async (dispatch, getState) => {
        const path = url + id;
        const result = await axios.delete(path);
        dispatch({ type: types.FETCH_PRODUCTS, products: result.data })
    },
}

export default {
    types,
    dispatcher
}