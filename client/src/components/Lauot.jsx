import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

function Lauot(props) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Lauot;
