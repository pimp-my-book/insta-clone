import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './resources/styles/styles.css';
import App from './App';
import config from "./config";
import * as serviceWorker from './serviceWorker';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.apiGateway.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID
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

const stage = process.env.REACT_APP_STAGE === "prod";

const authLink = setContext(async (_, { headers }) => {
    const token = await Auth.currentSession();
        return {
            headers: {
                ...headers,
                Authorization: token ? ` Bearer ${ token.idToken.jwtToken } ` : null
            }
        }
});

//stage ? process.env.REACT_APP_GRAPHQL_ENDPNT_PROD : process.env.REACT_APP_GRAPHQL_ENDPNT_DEV
const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={ client }>
        <Router>
                <App />
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
