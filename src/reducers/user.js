import {
  SET_TOKEN,
  REMOVE_TOKEN,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR
} from '../actions/user';

const initialState = {
  loading: false,
  token: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
      break;
    case REMOVE_TOKEN:
      return {
        ...state,
        token: action.token
      }
      break;
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
      break;
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
      break; 
    case USER_REGISTER_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
      break;
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
      break;
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
      break;
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
      break;   
    default: 
      return state;
  };
};

export default userReducer;