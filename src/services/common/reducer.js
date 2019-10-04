import actionType from "./actionTypes";
import initialState from "./initialStates";

const commonReducer = (state = initialState, action) => {
  switch (action.type) {


    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: true,
        userDetails: action.payload,
        loginEmail : action.loginEmail
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

export default commonReducer;
