import axiosContacts from "../../axios-contacts";

export const CONTACTS_SUCCESS = 'CONTACTS_SUCCESS';
export const CONTACTS_FAILURE = 'CONTACTS_FAILURE';


//export const CHANGE_BUTTON_TO_FALSE = 'CHANGE_BUTTON_TO_FALSE';
//export const CHANGE_BUTTON_TO_TRUE = 'CHANGE_BUTTON_TO_TRUE';

// export const changeButtonToFalse = () => ({type: CHANGE_BUTTON_TO_FALSE});
// export const changeButtonToTrue = () => ({type: CHANGE_BUTTON_TO_TRUE});
export const contactsSuccess = data => ({type: CONTACTS_SUCCESS, data});
export const contactsError = error => ({type: CONTACTS_FAILURE, error});

export const sendContactToBase = data => {
	return async dispatch => {
		try {
			await axiosContacts.post('/contacts.json', data);
		} catch (error) {
			dispatch(contactsError(error))
		}
	}
};

export const getContactsFromBase = () => {
	return async dispatch => {
		try {
			const response = await axiosContacts.get('/contacts.json');
			dispatch(contactsSuccess(response.data));
		} catch (error) {
			dispatch(contactsError(error));
		}
	}
};


// export const deleteDish = id => {
// 	return async dispatch => {
// 		try {
// 			await axiosOrders.delete('/dishes/' + id + '.json');
// 			dispatch(getDataFromBase());
// 		} catch (error) {
// 			dispatch(dishError(error));
// 		}
// 	}
// };

// export const buttonOnChangeToFalse = () => {
// 	return dispatch => {
// 		dispatch(changeButtonToFalse());
// 	}
// };
//
// export const buttonOnChangeToTrue = () => {
// 	return dispatch => {
// 		dispatch(changeButtonToTrue());
// 	}
// };

// export const editDish = (id, data) => {
// 	return async dispatch => {
// 		try {
// 			await axiosOrders.put('/dishes/' + id + '.json', data);
// 			dispatch(getDataFromBase());
// 		} catch (error) {
// 			dispatch(dishError(error));
// 		}
// 	}
// };

