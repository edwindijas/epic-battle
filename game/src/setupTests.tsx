// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


import { act, fireEvent, render, screen } from '@testing-library/react'
import { ReactNode, useRef, useState, FocusEvent } from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import defaultMessages from "lang/en.json"
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'theme/default';

const { getByTestId } = screen;

const AllTheProviders = ({ children }: { children?: ReactNode }) => {
  return <IntlProvider messages={defaultMessages} locale="en" defaultLocale="en" >
      <ThemeProvider theme={DefaultTheme} >
        { children }
      </ThemeProvider>   
    </IntlProvider>
}

export const changePath = (path: string) => {
  const inputElement = getByTestId('router-page-input') as HTMLInputElement,
      linkEle = getByTestId('router-page-link');

  act(() => {
      inputElement.value = path;
      inputElement.blur()
  })
  

  act (() => {
      fireEvent.click(linkEle)
  })
}

const RouteSwitcher = () => {
  const [path, setPath] = useState('/'),
      inputRef = useRef<HTMLInputElement>(null),
      handleSetPath = (e: FocusEvent<HTMLInputElement> ) => {
          const { target: {value} } = e;
          setPath(value);
      },  afterClick = () => {
          if (!inputRef.current) {
              return '';
          }
      };

      return <>
          <input ref={inputRef} data-testid='router-page-input' onBlur={handleSetPath} />
          <Link onClick={afterClick} to={path} data-testid='router-page-link' />
      </>
  };

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

global.testRender = (children: ReactNode) => {
  return render(<AllTheProviders >
    <MemoryRouter >
      { children }
    </MemoryRouter>
  </AllTheProviders>)
}

global.testRenderWithoutRouter = (children: ReactNode) => {
  return render(<AllTheProviders >
    { children }
  </AllTheProviders>)
}

global.dummyFunction = () => {}