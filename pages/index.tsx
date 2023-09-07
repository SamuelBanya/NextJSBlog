import Link from 'next/link';
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
        <ul>
          <li>
            <Link href="/posts/first-post">First Post</Link>
          </li>
          <li>
            <Link href="/posts/second-post">Second Post</Link>
          </li>
        </ul>
      </main>
    </>
  )
};

export default HomePage;
