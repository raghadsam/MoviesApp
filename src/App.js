import "./App.css";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main";
import Navbarr from "./Components/Navbar";

function App() {
  const handleQuery = (query) => {
    console.log(query);
  };
  return (
    <div className="App">
      <Navbarr handleQuery={handleQuery} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
