import React from "react";
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import NavContainer from './nav/nav_container';
import SearchContainer from './search/search_container';

const App = () => (
    <div>
        <Modal /> 
        <NavContainer />

        <Switch>
            <Route exact path="/" component={SearchContainer} />
        </Switch>
    </div>
);

export default App;