import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

function Layout(props) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
