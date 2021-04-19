import { AppProps } from 'next/app';
import React from 'react';
import PlausibleProvider from 'next-plausible';
import { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components';
import 'animate.css/animate.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgba(0, 0, 0, 0.02);
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`;

const theme: DefaultTheme = {
  colors: {
    primaryBackground: 'rgb(255, 255, 255)',
    secondaryBackground: 'rgb(250, 250, 250)',
    accent: 'rgb(113, 66, 187)',
    primaryGradient:
      'linear-gradient(90deg, rgb(255, 100, 75) 0%, rgb(255, 95, 88) 20%, rgb(178, 39, 98) 95%, rgb(138, 83, 162) 100%)',
    secondaryGradient:
      'linear-gradient(90deg, rgb(146, 88, 195) 10%, rgb(255, 95, 88) 40%, rgb(178, 39, 98) 95%, rgb(138, 83, 162) 100%)',
    tertiaryGradient:
      'linear-gradient(90deg, rgb(138, 83, 162) 0%, rgb(178, 39, 98) 30%, rgb(255, 95, 88) 51%, rgb(255, 124, 141) 100%)',
    gradientFallback: 'rgb(138, 83, 162)',
  },
  boxShadow: 'rgb(57 47 86 / 8%) 0px 4px 64px 20px',
  sizes: {
    xSmall: '450px',
    small: '600px',
    medium: '700px',
    large: '890px',
    xLarge: '900px',
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <PlausibleProvider
      domain="igor4stir.com"
      customDomain="https://stats.igor4stir.com"
      trackOutboundLinks
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  </>
);

export default MyApp;
