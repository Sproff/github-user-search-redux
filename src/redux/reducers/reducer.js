import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from "../constants/types";

export const initialState = {
  data: [],
  loading: false,
  error: "Please search for a user",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
