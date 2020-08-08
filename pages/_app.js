import { useEffect, useState } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

import { AuthProvider } from '@/lib/auth';
import customTheme from '@/styles/theme';

import SEO from '../next-seo.config';

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ['fastfeedback.io']
      });
    }
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
