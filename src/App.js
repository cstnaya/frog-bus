import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Routes from "./pages/Routes";
import Stops from "./pages/Stops";
import NearBy from "./pages/NearBy";
import 'font-awesome/css/font-awesome.min.css';
import './css/geomapbox.css';
import './css/global.css';

const App = () => {
    return (
        <HashRouter basename={`${process.env.PUBLIC_URL}`}>
            <Switch>
                <Route path="/routes" component={Routes} />
                <Route path="/stops"  component={Stops} />
                <Route path="/nearby" component={NearBy} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    );
};

export default App;