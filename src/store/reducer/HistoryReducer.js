import {
  LOAD_HISTORY,
  LOADING_HISTORY,
  DELETE_HISTORY,
} from "../action/ActionType";

const initialState = {
  histories: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HISTORY: {
      return {
        ...state,
        histories: action.payload,
      };
    }

    case LOADING_HISTORY: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    case DELETE_HISTORY: {
      return {
        ...state,
        histories: state.histories.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return {
        ...state,
      };
  }
};
