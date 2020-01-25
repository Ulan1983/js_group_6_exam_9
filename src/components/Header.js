import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<NavLink to={'/'}>Contacts</NavLink>
			<NavLink to={'/new-'}>Add new contact</NavLink>
		</div>
	);
};

export default Header;