import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user';
import snipReducer from './snips';

const rootReducer = combineReducers(
	{
    form: formReducer,
    userReducer,
    snipReducer
	}
);

export default rootReducer;