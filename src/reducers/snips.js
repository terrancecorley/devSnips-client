import {
  FETCH_SNIPS_REQUEST,
  POST_SNIP_REQUEST,
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
      break;
    case POST_SNIP_REQUEST:
      return {
        ...state,
        loading: action.loading
      }
      break;
    case SNIPS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        snips: action.snips
      }
      break;
    case SNIPS_ERROR:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      }
      break;
    default:
      return state;
  }
}

export default snipReducer;