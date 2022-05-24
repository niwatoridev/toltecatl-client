import "../App.css";
import background from "../images/banners/main-banner.png"


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={background} className="App-Banner" alt="civilizations-banner" />
      </header>
    </div>
  );
}

export default HomePage;
