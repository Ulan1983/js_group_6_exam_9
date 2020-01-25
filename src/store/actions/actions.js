import axiosContacts from "../../axios-contacts";

export const CONTACTS_SUCCESS = 'CONTACTS_SUCCESS';
export const CONTACTS_FAILURE = 'CONTACTS_FAILURE';

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




