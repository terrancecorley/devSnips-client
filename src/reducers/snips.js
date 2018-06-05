import {
  FETCH_SNIPS_REQUEST,
  SNIPS_SUCCESS,
  SNIPS_ERROR
} from '../actions/snips';

const initialState = {
  snips: [],
  loading: false,
  error: null
};


const snipReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_SNIPS_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
    case SNIPS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        snips: action.snips
      }
    case SNIPS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
    default:
      return state;
  }
}

export default snipReducer;