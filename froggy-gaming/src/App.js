import "./App.css";
import HomepageContainer from "./HomepageLayout/homepageContainer/components/HomepageContainer";

import { useEffect } from "react";
import Aos from "aos";
import ContactBar from "./FixedContactBar/ContactBar";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Nav from "./global/navigationBar/components/Nav";
import Footer from "./global/footer/Footer";
import CategoryContainer from "./CategoryLayout/CategoryContainer";

function App() {
  useEffect(() => {
    Aos.init({ disable: window.innerWidth < 1366 });
  }, []);
  return (
    <div>
      <Nav></Nav>
      <HomepageContainer></HomepageContainer>
      <ContactBar></ContactBar>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
}

export default App;
