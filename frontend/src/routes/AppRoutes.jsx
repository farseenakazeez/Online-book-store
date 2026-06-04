
import { Routes, Route } from "react-router-dom";

import {HomePage} from "../pages/customers/HomePage";
import BookDetailsPage from "../pages/customers/BookDetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/customers/CartPage";

function AppRoutes() {

  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
         <Route path="/cart" element={<CartPage />} />

      </Routes>

  );
}

export default AppRoutes;
