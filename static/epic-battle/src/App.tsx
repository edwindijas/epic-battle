import React from 'react';
import { IntlProvider } from 'react-intl';
import { Router } from './router/Router';
import defaultMessages from 'lang/en.json'
import * as StyEle from './App.style'
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'theme/default';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme} >
      <StyEle.Wrapper data-testid='main-app' className="App">
        <IntlProvider locale='en' messages={defaultMessages} >
          <Router />
        </IntlProvider>
      </StyEle.Wrapper>
    </ThemeProvider>
  );
}

export default App;
