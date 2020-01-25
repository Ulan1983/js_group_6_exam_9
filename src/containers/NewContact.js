import React, {Component} from 'react';

import './NewContact.css';
import {connect} from "react-redux";
import {sendContactToBase} from "../store/actions/actions";
import {NavLink} from "react-router-dom";

class NewContact extends Component {

	state = {
		name: '',
		phone: '',
		email: '',
		photo: ''
	};

	valueChanged = event => this.setState({[event.target.id]: event.target.value});

	submitDataHandler = event => {
		event.preventDefault();
		this.props.sendContactToBase(this.state);
		this.setState({name: '', phone: '', email: '', photo: ''})
};


	render() {
		return (
			<div className='new_contact'>
				<form className='input_form' onSubmit={this.submitDataHandler}>
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
						<button type='submit'>Save</button>
						<NavLink to='/'>Back to contacts</NavLink>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	contacts: state.cr.contacts,
	error: state.cr.error
});

const mapDispatchToProps = dispatch => {
	return {
		sendContactToBase: data => dispatch(sendContactToBase(data))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);