import { GET_USERS_REQUESTED } from "../constants/types";

export const getUsersRequested = (data) => {
  return {
    type: GET_USERS_REQUESTED,
    payload: data,
    error: null,
  };
};
