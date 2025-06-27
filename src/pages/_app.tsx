import FooterContainer from "@/components/FooterContainer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import "@/styles/cartRange.css";
import "@/styles/rangeFilter.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/context/CartProvider";
import CartSidebar from "@/components/CartSidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Component {...pageProps} />
        <FooterContainer />
        <CartSidebar />
      </CartProvider>
    </>
  );
}
