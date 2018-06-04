import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user';

const rootReducer = combineReducers(
	{
    form: formReducer,
		userReducer
	}
);

export default rootReducer;