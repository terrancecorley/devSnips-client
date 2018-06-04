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

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const fetchRegisterRequest = () => ({
  type: USER_REGISTER_REQUEST,
  loading: true
});

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const fetchRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS,
  loading: false,
  error: null
});

export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const fetchRegisterError = (error) => ({
  type: USER_REGISTER_ERROR,
  loading: false,
  error
});

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const fetchLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
  loading: true
});

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const fetchLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
  loading: false,
  error: null
});

export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const fetchLoginError = (error) => ({
  type: USER_LOGIN_ERROR,
  loading: false,
  error
});

const storeToken = (token, dispatch) => {
  const decodeToken = jwtDecode(token);
  dispatch(setToken(token));
  try {
    localStorage.setItem('token', token);
  } catch (err) {
    console.log(err);
  }
};

export const fetchLogin = (username, password) => (dispatch) => {
  dispatch(fetchLoginRequest());
  fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application-type/json'
    },
    body: JSON.stringify({username, password})
  })
  .then(res => res.json())
  .then(({authToken}) => storeToken(authToken, dispatch))
  .then(() => dispatch(fetchLoginSuccess()))
  .catch(err => dispatch(fetchLoginError(err)));
};

export const registerUser = (user) => (dispatch) => {
  dispatch(fetchLoginRequest());
  return fetch(`${API_BASE_URL}/api/users`, {
    method : 'POST',
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify(user)
  })
  .then(res => res.json())
  .then(() => dispatch(fetchRegisterSuccess()))
  .then(() => fetchLogin())
  .catch(err => dispatch(fetchRegisterError(err)));
};

export const logout = () => () => {
  localStorage.removeItem('token');
};



//write async actions to login a user

//write async actions to signup a user
  // request, success, err

// create store, reducers

// connect forms to redux

// dispatch actions when user submits

// return to client whether logged in or signed up (json web token)