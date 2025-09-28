import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import { ProductProvider } from "@/context/ProductContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ProductProvider>
  )

}
