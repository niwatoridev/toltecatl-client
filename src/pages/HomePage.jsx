import "../App.css";
import background from "../images/banners/main-banner.png"


function HomePage() {
  return (
    <div className="App">
      <header className="App-header" style={
        {backgroundImage: `url(${background})`}
        }>
        <h1 className="site-heading">Toltecatl</h1>
        {/* <img src="/images/banners/main-banner.png" className="App-Banner" alt="civilizations-banner" /> */}
      </header>
    </div>
  );
}

export default HomePage;
