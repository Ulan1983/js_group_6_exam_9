import React from 'react';
import './App.css';
import NewContact from "./containers/NewContact";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./containers/Contacts";

const App = () => (
    <div className="App">
        <Header/>
            <Switch>
                <Route path='/' exact component={Contacts}/>
                <Route path='/new-' component={NewContact}/>
            </Switch>
    </div>
  );


export default App;
