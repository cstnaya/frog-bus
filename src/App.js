import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

const App = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/second-test" component={Test} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    );
};

export default App;