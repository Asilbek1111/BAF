import "./App.css";
import About from "./Components/About/About";
import Brands from "./Components/Brands/Brands";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Number from "./Components/Number/Number";
import Pink from "./Components/Pink/Pink";
import Service from "./Components/Service/Service";
import { Route, Routes } from "react-router-dom";
import Category from "./Components/Category/Category";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/categoryId=:id" element={<Category />} />
        <Route path="/product=:productId"  element={<SingleProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
