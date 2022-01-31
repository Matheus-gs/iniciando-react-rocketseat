import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import { Cart } from "./pages/cart";
import { Catalog } from "./pages/catalog";

const errorPage = <h1>404 - Not Found</h1>;

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={errorPage} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
