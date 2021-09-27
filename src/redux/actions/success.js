import { GET_USERS_SUCCESS } from "../constants/types";

export const getUsersSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data.items,
    error: null,
  };
};
