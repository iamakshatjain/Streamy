// import React from 'react';
import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';

export default combineReducers({
	auth : AuthReducer //here we pass the reference to the function
});