// app/_document.js

import { Html, Main, NextScript } from "next/document";
import Head from "next/head";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add the Font Awesome CDN link here */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha384-DdXpQ+Uu/7/s3ejZ/WLbFGI1g+5sO9DKY7tbDdLgFOllTxH8i94vZNyk6tZFPJ0s"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
