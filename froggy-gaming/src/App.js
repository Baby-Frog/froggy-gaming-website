import "./App.css";
import Nav from "./HomepageLayout/navigationBar/components/Nav";
import SlickSlider from "./HomepageLayout/homepageSlider/components/SlickSlider";
import HomepageContainer from "./HomepageLayout/homepageContainer/components/HomepageContainer";
import { useEffect } from "react";
import Aos from "aos";
import ContactBar from "./FixedContactBar/ContactBar";

function App() {
  useEffect(() => {
    Aos.init({ disable: window.innerWidth < 1366 });
  }, []);
  return (
    <div>
      <Nav></Nav>
      <SlickSlider></SlickSlider>
      <HomepageContainer></HomepageContainer>
      <ContactBar></ContactBar>
    </div>
  );
}

export default App;
