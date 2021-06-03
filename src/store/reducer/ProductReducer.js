import {
  LOAD_PRODUCTS,
  LOADING_PRODUCTS,
} from "../action/ActionType";

const initialState = {
  products: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case LOADING_PRODUCTS: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
