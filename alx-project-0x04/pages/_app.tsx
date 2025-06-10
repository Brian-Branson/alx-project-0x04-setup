import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout"; // adjust path if needed
import "../styles/globals.css"; // optional, if you use global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;