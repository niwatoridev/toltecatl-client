import "../App.css";
import background from "../images/banners/main-banner.png"
import Home2 from "../components/Homepage/HomePartTwo/Home2";
import Home3 from "../components/Homepage/HomePartThree/Home3";


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={background} className="App-Banner" alt="civilizations-banner" />
      </header>
      <div>
        <Home2/>
      </div>
      <div>
        <Home3/>
      </div>
    </div>
  );
}

export default HomePage;
