import './App.css';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsalAuthentication
} from "@azure/msal-react";
import React from 'react';
import {InteractionType} from "@azure/msal-browser";
import {RoomGame} from "./components/roomGame";


const MainContent = () => {
  useMsalAuthentication(InteractionType.Redirect);
  return (
      <div className="App">
        <AuthenticatedTemplate>
            <h1>Iniciaste session :3</h1>
            <RoomGame/>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <h1> INICIA SESSION !!! </h1>
        </UnauthenticatedTemplate>
      </div>
  );
};

export default function App() {
  return (
      <MainContent/>
  );
}