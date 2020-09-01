import React from "react";
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import NavContainer from './nav/nav_container';
import SearchContainer from './search/search_container';
import ShowShowContainer from './show_show/show_show_container';
import ShowForm from './show_form/show_form_container';
import UserShowContainer from './user_show/user_show_container';

const App = () => (
    <div>
        <Modal /> 
        <NavContainer />

        <Switch>
            <Route exact path="/" component={SearchContainer} />
            <ProtectedRoute exact path="/shows/new" component={ShowForm} />
            <Route exact path="/shows/:showId" component={ShowShowContainer} />
            <ProtectedRoute exact path="/user" component={UserShowContainer} />
        </Switch>
    </div>
);

export default App;