import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/Global";

const theme = {
  primary1: '#4176b2',
  primary2: '#405CC9',
  secondary1: '#453DBF',
  secondary3: '#3DBEBF' 
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
