import React, { ReactElement } from 'react';
import { App as AppComponent, AppLogo, AppHeader, AppLink } from './App.styled';
import Logo from '@/assets/logo.svg';
import { Card } from '@/components';

function App(props): ReactElement {
  return (
    <AppComponent className="App">
      <AppHeader bgColor={props.color} className="App-header">
        <AppLogo src={Logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
      <Card />
    </AppComponent>
  );
}

export default App;