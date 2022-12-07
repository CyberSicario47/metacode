import Head from "next/head";
import "../styles/globals.css";
const MyApp = ({ Component, pageProps }) => (
  <>
  <Head>
  <title>MetaCode</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://stijndv.com" />
    <link rel="icon" href="https://stijndv.com/fonts/Exodous-Sans.css" />
  </Head>
  <Component {...pageProps}/>
  </>
);

export default MyApp;
