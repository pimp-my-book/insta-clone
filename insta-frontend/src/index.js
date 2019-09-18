import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './styles/styles.css';
import App from './App';
import config from "./resources/configs/config.js";
import * as serviceWorker from './serviceWorker';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    API: {
        endpoints: [
        {
            name: "insta-clone",
            endpoint: config.apiGateway.URL,
            region: config.apiGateway.REGION
        }
        ]
    }
});


serviceWorker.unregister();
