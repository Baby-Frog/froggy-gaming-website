import "./App.css";
import MovieSearchApp from "./HomepageLayout/navigationBar/components/Nav";
import SlickSlider from "./HomepageLayout/homepageSlider/components/SlickSlider";
import HomepageContainer from "./HomepageLayout/homepageContainer/components/HomepageContainer";

function App() {
  return (
    <div>
      <MovieSearchApp></MovieSearchApp>
      <SlickSlider></SlickSlider>
      <HomepageContainer></HomepageContainer>
    </div>
  );
}

export default App;
