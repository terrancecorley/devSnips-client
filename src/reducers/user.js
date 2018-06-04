import {
  SET_TOKEN,
  REMOVE_TOKEN,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR
} from '../actions/login';

const initialState = {
  token: null,
  error: null,
};