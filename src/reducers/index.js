import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user';
import snipReducer from './snips';

const rootReducer = combineReducers(
	{
    userReducer,
    snipReducer,
    form: formReducer
	}
);

export default rootReducer;