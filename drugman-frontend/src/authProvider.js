import React from 'react';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import {PublicClientApplication} from "@azure/msal-browser";

const AuthProvider = ({ children }) => {
    return (
        <MsalProvider
            instance={new PublicClientApplication(msalConfig)}
        >
            {children}
        </MsalProvider>
    );
};

export default AuthProvider;

