import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Amplify, { Auth } from 'aws-amplify';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './resources/styles/styles.css';
import App from './App';
import config from "./configs/config";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
    );

serviceWorker.unregister();
