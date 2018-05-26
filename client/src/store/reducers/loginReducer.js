import * as actionTypes from '../actions/loginActions'

const initialState = {
  username: '',
  password: '',
  location: '',
  loggedIn: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case actionTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      };

    case actionTypes.USER_LOGIN:
      // login authentication
      return {
        ...state,
        loggedIn: true
      }
    default:
      return state
  }
};

export default reducer;
