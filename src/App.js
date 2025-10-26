import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {NotFound} from "./pages/NotFound.jsx";
// import {Movies} from "./pages/Movies.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            {/* <Route path="/movies" element={<Movies />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
