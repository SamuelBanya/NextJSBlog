import NavBar from '../components/NavBar';
import '../styles/globals.css';

// 'component' is automatically provided by Next.js to render the related page
function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
