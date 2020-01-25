import React, {Component} from 'react';
import {getContactsFromBase} from "../store/actions/actions";
import {connect} from "react-redux";

import './Contacts.css';

class Contacts extends Component {

	componentDidMount() {
		this.props.getContactsFromBase()
	}

	render() {
		return (
			<div className='contacts'>
				{this.props.contacts ? Object.keys(this.props.contacts).map(id => {
					return (
						<div key={id} className='item'>
							<img src={this.props.contacts[id].photo} alt=""/>
							<p>{this.props.contacts[id].name}</p>
						</div>
					)
				}) : null}
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
		getContactsFromBase: () => dispatch(getContactsFromBase())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);