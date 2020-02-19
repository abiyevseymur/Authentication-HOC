import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';

let authenticated=  {
    auth: { authenticated: localStorage.getItem('token') }
} ;
type authType =  { auth?: { authenticated: string | null; errorMessage: string | null; }} | undefined;

ReactDOM.render(
    <Provider store={createStore(reducers,
        authenticated as authType,
        applyMiddleware(thunk))}>
        <BrowserRouter>
            <App >
                <Route path="/" exact component={Welcome} />
                <Route path="/signup" component={Signup as any} />
                <Route path="/feature" component={Feature} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin as any} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

