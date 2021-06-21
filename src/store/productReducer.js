const defaultState = {
  products: []
}

const ADD_PRODUCT = "ADD_PRODUCT";

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(action.payload)
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
}

export const addProductAction = (payload) => {
  return { type: ADD_PRODUCT, payload }
};

