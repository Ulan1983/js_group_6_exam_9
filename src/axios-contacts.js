import axios from 'axios';

const axiosContacts = axios.create({
	baseURL: 'https://burger-builder-ulan-beltaev.firebaseio.com/'
});

export default axiosContacts;