import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Contribution from './pages/Contribution';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Contribution} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
