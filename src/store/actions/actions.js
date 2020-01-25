import axiosContacts from "../../axios-contacts";
import {CONTACTS_FAILURE, CONTACTS_SUCCESS} from "./actionTypes";

export const contactsSuccess = data => ({type: CONTACTS_SUCCESS, data});
export const contactsFailure = error => ({type: CONTACTS_FAILURE, error});

export const sendContactToBase = data => {
	return async dispatch => {
		try {
			await axiosContacts.post('/contacts.json', data);
			dispatch(getContactsFromBase())
		} catch (error) {
			dispatch(contactsFailure(error))
		}
	}
};

export const getContactsFromBase = () => {
	return async dispatch => {
		try {
			const response = await axiosContacts.get('/contacts.json');
			dispatch(contactsSuccess(response.data));
		} catch (error) {
			dispatch(contactsFailure(error));
		}
	}
};

export const getId = (id, data) => {
	return async dispatch => {
		try {
			await axiosContacts.get('/contacts/' + id + '.json', data);
			dispatch(getContactsFromBase())
		} catch (error) {
			dispatch(contactsFailure(error))
		}

	}
};

export const removeContact = id => {
	return async dispatch => {
		try {
			await axiosContacts.delete('/contacts/' + id + '.json');
			dispatch(getContactsFromBase());
		} catch (error) {
			dispatch(contactsFailure(error));
		}
	}
};




