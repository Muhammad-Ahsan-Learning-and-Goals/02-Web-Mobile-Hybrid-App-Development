import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";

// import { Heading, Heading1, Heading2, Heading3 } from "./components/Props";

function App() {
  return (
    <>
      {/* <Heading  name = 'React' age='12'/> */}

      {/* <Heading1 />
      <Heading2 />
      <Heading3 /> */}

      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<div>Page not Found 404</div>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
