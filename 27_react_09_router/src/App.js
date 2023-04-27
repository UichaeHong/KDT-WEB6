import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/Mainpage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";
import "./styles/Common.scss";
import axios from "axios";
import ProbStudent from "./pages/student/ProbStudent";
import ProbList from "./pages/ProbList";

function App() {
  const [products, setProducts] = useState([]);
  const [Probs, setProb] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setProducts(res.data.slice(0, 10));
    };

    getProducts();
  }, []);

  useEffect(() => {
    const getProb = async () => {
      const res2 = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setProb(res2.data.slice(0, 10));
    };
    getProb();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} />}
          />

          {/* 실습 */}
          <Route path="/student/:name" element={<ProbStudent />} />

          <Route path="/Probs" element={<ProbList products={Probs} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
