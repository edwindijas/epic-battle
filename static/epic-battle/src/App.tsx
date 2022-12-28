import React from 'react';
import { IntlProvider } from 'react-intl';
import { Router } from './router/Router';
import defaultMessages from 'lang/en.json'

function App() {
  return (
    <div data-testid='main-app' className="App">
      <IntlProvider locale='en' messages={defaultMessages} >
        <Router />
      </IntlProvider>
    </div>
  );
}

export default App;
