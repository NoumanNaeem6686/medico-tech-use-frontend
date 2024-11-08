import Head from "next/head";
import MainHomeComponent from "./Components/pageSections/Home/MainHomeComponent";

export default function Home() {
  return (
    <>
      <Head>
        {/* Add the Font Awesome CDN link here */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMfqEAPg6VRRwP6jpZ1iVDg83R9+8HOY4m+4f4a"
          crossOrigin="anonymous"
        />
      </Head>
      <MainHomeComponent />
    </>
  );
}
