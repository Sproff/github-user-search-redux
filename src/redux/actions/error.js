import { GET_USERS_FAILED } from "../constants/types";

export const getUsersFailed = () => {
  return {
    type: GET_USERS_FAILED,
    payload: "Oops. No user found! Please search for a user",
  };
};
