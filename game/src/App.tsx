import React from 'react';
import { IntlProvider } from 'react-intl';
import { Router } from './router/Router';
import defaultMessages from 'lang/en.json'
import * as StyEle from './styles'
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'theme/default';
import { FeatureBackground } from 'features/background/Background';
import { WithUser } from 'services/User/User';
import { useSquare } from 'hooks/useSquare';

function App() {
  const square = useSquare();
  const scale = square / 820;
  
  return (
    <WithUser >
      <ThemeProvider theme={DefaultTheme} >
        <IntlProvider locale='en' messages={defaultMessages} >
          { <FeatureBackground /> }
          <StyEle.Wrapper data-testid='main-app' scale={scale} className="App">
            <Router />
          </StyEle.Wrapper>
        </IntlProvider>
      </ThemeProvider>
    </WithUser>
  );
}

export default App;
