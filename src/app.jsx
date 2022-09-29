import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
//import Members from "./components/members/members";
import Footer from "./components/footer/footer";

function WebContent() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      {/*<Members />*/}
      <Contact />
      <Footer />
    </>
  );
}
export default WebContent;
