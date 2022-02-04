import React from "react";
import "../styles/globals.css";
import "../components/burger-menu/burger-menu.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
