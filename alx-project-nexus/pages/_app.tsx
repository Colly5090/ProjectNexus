import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import { ProductProvider } from "@/context/ProductContext";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ProductProvider>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ProductProvider>
    </ErrorBoundary>
  )

}
