import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Category from "./Components/Category/Category";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/categoryId=:id" element={<Category />} />
        <Route path="/product=:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
