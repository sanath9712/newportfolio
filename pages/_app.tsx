import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../Components/ThemeContext"; // Adjust the path as needed

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
