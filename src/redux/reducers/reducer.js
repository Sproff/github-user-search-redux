import { GET_USER_SUCCESS, GET_USER_ERROR } from "../constants/types";

export const initialState = {
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
