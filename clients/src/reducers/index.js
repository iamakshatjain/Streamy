// import React from 'react';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import AuthReducer from './AuthReducer';

export default combineReducers({
	auth : AuthReducer, //here we pass the reference to the function
	form : formReducer
});