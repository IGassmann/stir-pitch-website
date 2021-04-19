import { AppProps } from 'next/app';
import React, { Component } from 'react';
import PlausibleProvider from 'next-plausible';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'animate.css/animate.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgba(0, 0, 0, 0.02);
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <PlausibleProvider domain="igor4stir.com" customDomain="https://stats.igor4stir.com" trackOutboundLinks>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  </>
);

export default MyApp;