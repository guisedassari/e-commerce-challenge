import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global";
import { CartProvider } from "../hooks/useCart";
import React from "react";
import { Header } from "../components/Header";
import { AuthProvider } from "../contexts/AuthContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <GlobalStyle />
          <Component {...pageProps} />;
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
