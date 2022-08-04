import "./App.css";
import Nav from "./HomepageLayout/navigationBar/components/Nav";
import SlickSlider from "./HomepageLayout/homepageSlider/components/SlickSlider";
import HomepageCategory from "./HomepageLayout/homepageCategory/components/HomepageCategory";

function App() {
  return (
    <div>
      <Nav></Nav>
      <SlickSlider></SlickSlider>
      <HomepageCategory></HomepageCategory>
    </div>
  );
}

export default App;
