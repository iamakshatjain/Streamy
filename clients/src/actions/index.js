import streams from '../apis/streams';

export const signIn = (user_id) =>{
	return {
		type : "SIGN_IN",
		payload : user_id
	};
};

export const signOut = (user_id) =>{
	return {
		type : "SIGN_OUT",
		payload : user_id
	};
};

export const createStream = formValues => async dispatch => {
	streams.post('/streams',formValues);
};	