import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { GlobalProvider } from "./context/GlobalProvider";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
