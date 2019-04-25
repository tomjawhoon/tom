const types = {
    UPDATE_ID: 'UPDATE_ID',
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_PRICE: 'UPDATE_PRICE',
}

const dispatcher = {
    updateId: (id) => async (dispatch, getState) => {
        dispatch({ type: types.UPDATE_ID, id })
    },
    updateName: (name) => async (dispatch, getState) => {
        dispatch({ type: types.UPDATE_NAME, name })
    },
    updatePrice: (price) => async (dispatch, getState) => {
        dispatch({ type: types.UPDATE_PRICE, price })
    },
}

export default {
    types,
    dispatcher
}