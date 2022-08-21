import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Category from "./Components/Category/Category";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import NavAbout from "./Components/NavAbout/NavAbout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/categoryId=:id" element={<Category />} />
        <Route path="/product=:productId" element={<SingleProduct />} />
        <Route path="/about" element={<NavAbout />} />
      </Routes>
    </div>
  );
}

export default App;
