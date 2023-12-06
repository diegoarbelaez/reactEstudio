import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./pages/Products";
import NoMatch from "./components/NoMatch";

//Pages
import Home from "./pages/Home";  

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} exact>
            <Route index element={<Home />} exact></Route>
            <Route path="/products" element={<Products />} exact></Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
