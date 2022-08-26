import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import HomepageContainer from "./HomepageLayout/homepageContainer/components/HomepageContainer";
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
      <Routes>
        <Route
          path="/froggy-gaming-website"
          element={<HomepageContainer />}
        ></Route>
        <Route path="/category" element={<CategoryContainer />}></Route>
      </Routes>
      <ContactBar></ContactBar>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
}

export default App;
