// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import EventList from './components/eventlist';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/events" component={EventList} />
                {/* Outras rotas */}
            </Switch>
        </Router>
    );
};

export default App;