import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";
import { ProductProvider } from "@/context/ProductContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import Head from "next/head";
import { useEffect, useState } from "react";
import Splash from "@/components/Splash";


export default function App({ Component, pageProps }: AppProps) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <Head>
        <title>NexusShop - Product Catalog Store</title>
        <meta name="description" content="Shop the latest electronics, fashion, and furniture with amazing discounts." />
        <link rel="icon" href="/assets/icons/brand.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-icon-152x152.png" />
      </Head>

      <Splash visible={showSplash} durationMs={4000} onFinish={() => setShowSplash(false)} />
      <ErrorBoundary>
        <ProductProvider>
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        </ProductProvider>
      </ErrorBoundary>
    </>

  )

}
