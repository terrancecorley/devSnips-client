import jwtDecode from 'jwt-decode';
import { API_BASE_URL } from '../config';


export const SET_TOKEN = 'SET_TOKEN';
export const setToken = (token) => ({
  type: SET_TOKEN,
  token
});

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const removeToken = () => ({
  type : REMOVE_TOKEN,
  token: null
});

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const fetchLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
  loading: true
});

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const fetchLoginSuccess = (authToken) => ({
  type: USER_LOGIN_SUCCESS,
  loading: false,
  error: null,
  authToken
});

export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const fetchLoginError = (error) => ({
  type: USER_LOGIN_ERROR,
  loading: false,
  error
});

export const fetchLogin = (username, password) => (dispatch) => {
  dispatch(fetchLoginRequest());
  fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application-type/json'
    },
    body: JSON.stringify({username, password})
  })
  .then(response => response.json())
  .then(authToken => dispatch(fetchLoginSuccess(authToken)))
  .catch(error => dispatch(fetchLoginError(error)));
};



//write async actions to login a user

//write async actions to signup a user
  // request, success, err

// create store, reducers

// connect forms to redux

// dispatch actions when user submits

// return to client whether logged in or signed up (json web token)