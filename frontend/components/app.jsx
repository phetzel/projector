import React from "react";

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Modal from './modal/modal';
import NavContainer from './nav/nav_container';

const App = () => (
    <div>
        <Modal /> 
        <NavContainer />
        
    </div>
);

export default App;