import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import HomepageContainer from "./HomepageLayout/homepageContainer/components/HomepageContainer";
import Nav from "./global/navigationBar/components/Nav";
import Footer from "./global/footer/Footer";
import CategoryContainer from "./CategoryLayout/CategoryContainer";
import ContactBar from "./global/FixedContactBar/ContactBar";
import ScrollToTopButton from "./global/ScrollToTop/ScrollToTop";

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
        <Route
          path="froggy-gaming-website/category"
          element={<CategoryContainer />}
        ></Route>
      </Routes>
      <ContactBar></ContactBar>
      <ScrollToTopButton></ScrollToTopButton>
      <Footer></Footer>
    </div>
  );
}

export default App;
