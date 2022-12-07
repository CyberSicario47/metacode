import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";

const MyApp = ({ Component, pageProps }) => (
  <>
    <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TWZ1CK52WY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-TWZ1CK52WY');
    `}
      </Script>
    </div>
    <Head>
      <title>MetaCode</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="icon" href="https://stijndv.com/fonts/Exodous-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
