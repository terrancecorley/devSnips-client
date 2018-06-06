import { API_BASE_URL } from '../config';

export const FETCH_SNIPS_REQUEST = 'FETCH_SNIPS_REQUEST';
export const fetchSnipsRequest = () => ({
  type: FETCH_SNIPS_REQUEST,
  loading: true
}); 

export const CREATE_SNIP = 'CREATE_SNIP';
export const createSnip = () => ({
  type: CREATE_SNIP,
  creatingNew: true
});

export const POST_SNIP_REQUEST = 'POST_SNIP_REQUEST';
export const postSnipRequest = () => ({
  type: POST_SNIP_REQUEST,
  loading: true
}); 

export const UPDATE_SNIP_REQUEST = 'UPDATE_SNIP_REQUEST';
export const updateSnipRequest = () => ({
  type: UPDATE_SNIP_REQUEST,
  loading: true
}); 

export const SNIPS_SUCCESS = 'SNIPS_SUCCESS';
export const snipsSuccess = (snips) => ({
  type: SNIPS_SUCCESS,
  loading: false,
  error: null,
  creatingNew: false,
  snips
}); 

export const SNIPS_ERROR = 'SNIPS_ERROR';
export const snipsError = (error) => ({
  type: SNIPS_ERROR,
  loading: false,
  error
}); 


export const fetchSnips = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(fetchSnipsRequest());

  return fetch(`${API_BASE_URL}/api/snips`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(snips => dispatch(snipsSuccess(snips)))
  .catch(err => dispatch(snipsError));
};

export const postSnip = (snip) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(postSnipRequest());

  return fetch(`${API_BASE_URL}/api/snips`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({...snip})
  })
  .then(() => dispatch(fetchSnips()))
  .catch(err => dispatch(snipsError));
};

export const updateSnip = (snip, snipID) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(postSnipRequest());

  return fetch(`${API_BASE_URL}/api/snips`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({...snip})
  })
  .then(() => dispatch(fetchSnips()))
  .catch(err => dispatch(snipsError));
};