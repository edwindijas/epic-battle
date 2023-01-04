import React from 'react';
import { IntlProvider } from 'react-intl';
import { Router } from './router/Router';
import defaultMessages from 'lang/en.json'
import * as StyEle from './App.style'
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'theme/default';
import { FeatureBackground } from 'features/background/Background';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme} >
        <IntlProvider locale='en' messages={defaultMessages} >
          { <FeatureBackground /> }
          <StyEle.Wrapper data-testid='main-app' className="App">
            <Router />
          </StyEle.Wrapper>
        </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
