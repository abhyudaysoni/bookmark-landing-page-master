import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import BodyContainer from "./components/BodyContainer/BodyContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer />
      <Footer />
    </div>
  );
}

export default App;
