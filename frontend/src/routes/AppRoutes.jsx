
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/customers/HomePage";
import BookDetailsPage from "../pages/customers/BookDetailPage";
import CategoryPage from "../pages/customers/CategoryPage";
import CartPage from "../pages/customers/CartPage";
import CheckoutPage from "../pages/customers/CheckOutPage";
import OrderSuccessPage from "../pages/customers/OrderSuceessPage";
import CustomerProfile from "../pages/customers/CustomerProfile";
import SellerRegistrationPage from "../pages/customers/SellerRegistrationPage";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";

import AdminLayout from "../pages/admin/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";

import AdminBooks from "../pages/admin/AdminBooks";
import AdminOrders from "../pages/admin/AdminOrders";
import AdminCustomers from "../pages/admin/AdminCustomers";
import AdminSellers from "../pages/admin/AdminSellers";
function AppRoutes() {

  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book/:id" element={<BookDetailsPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<CustomerProfile />} />
      <Route path="/orders" element={<OrderHistoryPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order/success/:id" element={<OrderSuccessPage />} />

      <Route path="/seller/register" element={<SellerRegistrationPage />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="books" element={<AdminBooks />} />
        <Route path="orders" element={<AdminOrders />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="sellers" element={<AdminSellers />} />
      </Route>



    </Routes>

  );
}

export default AppRoutes;
