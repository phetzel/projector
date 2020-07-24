import React from "react";

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import NavContainer from './nav/nav_container';
import ShowIndexContainer from './shows_index/show_index_container';

const App = () => (
    <div>
        <Modal /> 
        <NavContainer />
        <ShowIndexContainer />
    </div>
);

export default App;