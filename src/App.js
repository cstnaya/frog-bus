import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/routes" component={Test} />
                <Route path="/stops"  component={Test} />
                <Route path="/nearby" component={Test} />
                <Route path="/routes" component={Test} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    );
};

export default App;