import React from 'react';
import './App.css';
import NewContact from "./containers/NewContact";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Contacts from "./containers/Contacts";
import EditContact from "./containers/EditContact";

const App = () => (
    <div className="App">
        <Header/>
            <Switch>
                <Route path='/' exact component={Contacts}/>
                <Route path='/edit' component={EditContact}/>
                <Route path='/new-' component={NewContact}/>

            </Switch>
    </div>
  );


export default App;
