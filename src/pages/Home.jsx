import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link to="/about">ABOUT</Link>
    </>
  );
}

export default Home;
