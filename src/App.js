import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Routes from "./pages/Routes";

const App = () => {
    return (
        <HashRouter basename={`${process.env.PUBLIC_URL}`}>
            <Switch>
                <Route path="/routes" component={Routes} />
                <Route path="/stops"  component={Routes} />
                <Route path="/nearby" component={Routes} />
                <Route path="/routes" component={Routes} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    );
};

export default App;