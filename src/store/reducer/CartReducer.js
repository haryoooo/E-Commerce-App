import {
  ADD_CARTS,
  EDIT_CARTS,
  DELETE_CARTS,
  LOAD_CARTS,
  LOADING_CARTS,
  DELETE_ALL_CARTS,
} from "../action/ActionType";

const initialState = {
  carts: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARTS: {
      return {
        ...state,
        carts: state.carts.concat(action.payload),
      };
    }

    case EDIT_CARTS: {
      const index = state.carts.findIndex(
        (cart) => cart.id === action.payload.id
      );
      const newCart = [...state.carts];
      newCart[index] = action.payload;

      return {
        ...state,
        carts: newCart,
      };
    }

    case LOAD_CARTS: {
      return {
        ...state,
        carts: action.payload,
      };
    }

    case LOADING_CARTS: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case DELETE_CARTS: {
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };
    }

    case DELETE_ALL_CARTS: {
      return {
        ...state,
        carts: [],
      };
    }

    default:
      return {
        ...state,
      };
  }
};
