import NavBar from '../components/NavBar';
import Head from 'next/head';

function HomePage() {
  console.log("HomePage rendered");
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  )
};

export default HomePage;
