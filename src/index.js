import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import contactsReducer from "./store/reducers/contactsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	cr: contactsReducer,

});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);



const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
