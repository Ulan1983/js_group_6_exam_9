import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import contactsReducer from "./store/reducers/contactsReducer";
import App from './App';

import './index.css';

const store = createStore(contactsReducer, applyMiddleware(thunkMiddleware));


const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
