import { SET_AUTH } from "../action/ActionType";

const initialState = {
  isLogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        isLogin: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
