import actionType from "./actionTypes";
import initialState from "./initialStates";

const userReducer = (state, action) => {
  switch (action.type) {


    case actionType.SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
       };
    case actionType.LOGIN_FAILURE:
      return {
        ...state,
        loginStatus: false,
      };
    default:
      return state;
  }
};

export default userReducer;
