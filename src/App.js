import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { GlobalProvider } from "./context/GlobalProvider";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
