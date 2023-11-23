import { GET_USERS } from "../actions";

const initialState = {
  content: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};
export default usersReducer;
