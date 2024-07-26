import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "../Components/ThemeContext"; // Adjust the path as needed

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Sanath Bhimsen</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
