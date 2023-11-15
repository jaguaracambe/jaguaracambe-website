import '../styles/global.css';
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jaguaracambé</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}