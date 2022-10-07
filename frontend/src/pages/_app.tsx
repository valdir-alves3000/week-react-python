import { ThemeProvider } from "@mui/material";
import { Header } from "components/Header";
import type { AppProps } from "next/app";
import { theme } from "themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
