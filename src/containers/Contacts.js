import React, {Component} from 'react';
import {getContactsFromBase, getId, removeContact} from "../store/actions/actions";
import {connect} from "react-redux";

import './Contacts.css';
import Modal from "../components/UI/Modal/Modal";
import {NavLink} from "react-router-dom";


class Contacts extends Component {

	state = {
		isModalShown: false,
		data: {}
	};

	componentDidMount() {
		this.props.getContactsFromBase()
	}

	showModalInfo = id => {
		const data = this.props.contacts;
		this.props.getId(id);
		this.setState({
			data: {
				name: data[id].name,
				phone: data[id].phone,
				email: data[id].email,
				photo: data[id].photo
			},
			isModalShown: true
		})
	};

	closeModalInfo = () => {
		this.setState({isModalShown: false})
	};


	render() {
		return (
			<div className='contacts'>
				{this.props.contacts ? Object.keys(this.props.contacts).map(id => {
					return (
						<div key={id} className='item' onClick={() => this.showModalInfo(id)}>
							<img src={this.props.contacts[id].photo} alt=""/>
							<p>{this.props.contacts[id].name}</p>
						</div>
					)
				}) : null}
				<Modal
					show={this.state.isModalShown}
					close={this.closeModalInfo}
				>
					<div className='card'>
						<img src={this.state.data.photo} alt=""/>
						<p style={{fontSize: '20px', fontWeight: 'bold'}}>{this.state.data.name}</p>
						<p>Phone: {this.state.data.phone}</p>
						<p>Email: {this.state.data.email}</p>
						<NavLink to='/edit' >Edit</NavLink>
						<button onClick={() => this.props.removeContact(this.props.id)}>Delete</button>
					</div>
				</Modal>

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
		getContactsFromBase: () => dispatch(getContactsFromBase()),
		getId: (id, data) => dispatch(getId(id, data)),
		removeContact: id => dispatch(removeContact(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);