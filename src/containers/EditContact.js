import React, {Component} from 'react';

import {connect} from "react-redux";
import {sendContactToBase} from "../store/actions/actions";
import axiosContacts from "../axios-contacts";

class EditContact extends Component {

	state = {
		name: '',
		phone: '',
		email: '',
		photo: ''
	};

	valueChanged = event => this.setState({[event.target.id]: event.target.value});

	// async componentDidMount() {
	// 	const id = this.props.match.params.id;
	// 	const response = await axiosContacts.get("/contacts/" + id + ".json");
	//
	// 	this.setState({
	// 		name: response.data.name,
	// 		phone: response.data.phone,
	// 		email: response.data.email,
	// 		photo: response.data.photo
	// 	})
	// }

	editPost = async (event) => {
		event.preventDefault();

		const data = {
			name: this.state.name,
			phone: this.state.phone,
			email: this.state.email,
			photo: this.state.photo
		};

			const id = this.props.match.params.id;
			await axiosContacts.put("/contacts/" + id + ".json", data);
			this.props.history.push('/');

	};

	render() {
		return (
			<div className='new_contact'>
				<form className='input_form' onSubmit={this.editPost}>
					<label htmlFor='name'>Name</label>
					<input type="text" id='name' value={this.state.name} onChange={this.valueChanged} required/>
					<label htmlFor='phone'>Phone</label>
					<input type="number" id='phone' value={this.state.phone} onChange={this.valueChanged} required/>
					<label htmlFor='email'>Email</label>
					<input type="email" id='email' value={this.state.email} onChange={this.valueChanged} required/>
					<label htmlFor='photo'>Photo</label>
					<input type="text" id='photo' value={this.state.photo} onChange={this.valueChanged} required/>
					<p>Photo preview</p>
					<img src={this.state.photo} alt=""/>
					<div>
						<button type='submit'>Edit</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	contacts: state.contacts,
	error: state.error
});

const mapDispatchToProps = dispatch => {
	return {
		sendContactToBase: data => dispatch(sendContactToBase(data))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);