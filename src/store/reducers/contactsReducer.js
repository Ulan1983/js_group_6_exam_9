import {CONTACTS_FAILURE, CONTACTS_SUCCESS} from "../actions/actions";

const initialState = {
	contacts: null,
	error: null
};


const contactsReducer = (state = initialState, action) => {
	switch(action.type) {
		case CONTACTS_SUCCESS:
			return {...state, contacts: action.data};
		case CONTACTS_FAILURE:
			return {...state, error: action.error};
		default:
			return state
	}
};

export default contactsReducer;